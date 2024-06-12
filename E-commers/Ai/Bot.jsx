import React, { useState,useRef } from 'react';
import { FaImage } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import './bot.css';
import axios from 'axios';
import { errorfunction } from '../src/tostify';
import { successfunction } from '../src/tostify';



export const Bot = () => {
  const [messages, setMessages] = useState([]);//for maessages representation
  const [input, setInput] = useState('');
  const [image, setImage] = useState(null);
  const [imgurl,setimgurl]=useState('');
  const [flag,setflag]=useState(false);

  const r=useRef(null);

  console.log(messages);

  const sendMessage = () => {

    if(input===''){
      errorfunction("Please enter your something")
      return;
    }
    setflag(true);

    if (input.trim()==='done')
      {
        setMessages([...messages, { text: input, sender: 'user' }]);
        setMessages([...messages, { text:'Great! If you have any more questions or need further assistance ,feel free to ask.', sender: 'bot' }]);
        setInput('');
        setimgurl('')
        setImage(null)
        setflag(false);

      }else{
        setMessages([...messages, { text: input, sender: 'user' ,img: imgurl}]);
        setInput(''); 
        Onsubmit();

      } 
     
    

  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
    setimgurl(URL.createObjectURL(e.target.files[0]));
    successfunction("Image added successfully please ask any question about Image")

  }

  async function Onsubmit()
  {
    if (image){

        handleImageUpload();
        console.log('Upload image not')
    }
    else{
      try{
        const response = await axios.post("http://localhost:5000/v1/gemini",{"message":input});
        console.log(response.data);
        setflag(false);

        setMessages((prevMessages) => [...prevMessages, { text:response.data.data, sender: 'bot'}]);
      }
      catch(err){
        errorfunction('Something went wrong!');
        setflag(false);
        console.log(err);
      }
    }



 }


  const handleImageUpload = async () => {

    const formData = new FormData();
    formData.append('file', image); 

    try {
       const result= await axios.post(`http://localhost:5000/v1/img/?question=${input}`,formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log(result);
        if(result.data.status){
           setflag(false);
           setMessages((prevMessages) => [...prevMessages, { text:result.data.data, sender: 'bot'}]);
          }
        else
          successfunction('0')

      } catch (error) {
        setflag(false);
        errorfunction('Something went wrong')
        console.error('Error uploading image:', error);
      }
  }

  console.log(image)


  return (

    <div >

      <div className='chat-container'>

        <div className="chat-header">
          <h2>Chat with Undela Bot</h2>
        </div>
        
        <div className="chat-messages">

          
          {messages.map((message, index) => (

                  <div key={index} className={`chat-message ${message.sender}`}>
                    <div className="d-block">
                      
                    { message.img &&
                    <img src={message.img} alt={message.text} width={200} height={200}/>
                    }
                    {
                      message.audio &&
                      <audio  src={message.audio} controls />
                    
                    }
                    </div>
                    <div className="">
                    <p>{message.text}</p>
                    </div>
                    
                  </div>
          ))}
          { 
              flag&&<Bub/>

          }


        </div>

        <div className="chat-input">
          <input type='file' ref={r} onChange={handleImageChange} style={{display:"none"}}></input>
        <FaImage  className='fs-2' onClick={()=>{r.current.click()}}/>
        <AudioRecorder messages={messages} setMessages={setMessages} />
          <input
            type="text"
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                sendMessage();
              }} 

            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <IoSend   className='fs-1 send' onClick={sendMessage} />
        </div>


      </div>

    </div>
      
  );
};



function Bub(){

  return(
    <div className="bubbleh">
      <div className="bubble1"></div>
      <div className="bubble2"></div>
      <div className="bubble3"></div>
      <div className="bubble4"></div>

    </div>
  )
}


import { BsFillMicMuteFill } from "react-icons/bs";

const AudioRecorder = ({messages,setMessages}) => {

  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {

    setIsRecording(true);
    audioChunksRef.current = [];
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = event => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioURL(audioUrl);
      setMessages([...messages, {  sender: 'user' ,audio:audioUrl} ]);
      
      sendAudioToServer(audioBlob);//detonetor
 
    };

    mediaRecorderRef.current.start();

  };

  const stopRecording = () => {

    setIsRecording(false);
    mediaRecorderRef.current.stop();

  };

  const sendAudioToServer = async (audioBlob) => {

    const formData = new FormData();
    formData.append('audioFile', audioBlob,'audio.mp3');

    try {
     const result= await axios.post('http://localhost:5000/v1/audio',formData,{ headers: {
      'Content-Type': 'audio/mpeg'
    }});
      console.log(result);
      alert('Audio uploaded successfully!');
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };


  return (
      <div onClick={isRecording ? stopRecording : startRecording}>
        
        {isRecording ? (<BsFillMicMuteFill className='fs-2'/>) :(<FaMicrophone className='fs-2'/>)}

      </div>
     
  );
};


