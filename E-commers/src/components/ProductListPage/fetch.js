import axios from "axios";


export  async function fetch(name,state){
    try{

        const result= await axios.post(`http://localhost:5000/v1/products/`,name);
        if(result.data.status)
            state(result.data.data);

    }
    catch(err){
        console.log(err);
    }
}



export  async function fetch_by_id(name,state,setimg){
    try{
        const result= await axios.post(`http://localhost:5000/v1/products/`,name);
        if(result.data.status){
          state(result.data.data[0]);
          setimg(result.data.data[0].key_img)
        }

    }
    catch(err){
        console.log(err);
    }
}