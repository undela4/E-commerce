const axios=require('axios');
const {chatSession}=require('../Configurations/Google_Api.js');
const { spawn } = require('child_process');
const fs=require('fs');
const getWeatherForecast = async (city) => {
    try {

        console.log(city)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.WEATHER_API_KEY}&units=metric`

        const response = await axios.get(url);
        const data = response.data;

        if (data.cod === 200) {
            const weatherDescription = data.weather[0].description;
            const temp = data.main.temp;
            const feelsLike = data.main.feels_like;
            const tempMin = data.main.temp_min;
            const tempMax = data.main.temp_max;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            return (
                `The current weather in ${city} is ${weatherDescription} with a temperature of ${temp}°C.\n` +
                `Feels like: ${feelsLike}°C\n` +
                `Min temperature: ${tempMin}°C, Max temperature: ${tempMax}°C\n` +
                `Humidity: ${humidity}%\n` +
                `Wind speed: ${windSpeed} m/s`
            );
        } else {
            return data.message;
        }
    } catch (error) {
        return 'Error fetching weather forecast.';
    }


};

exports.weather=async (req, res)=>{

    try{
        const message = req.body.message; 
        let response = '';
        console.log(message)


          if (message.includes('weather'))
          {
            const city = message.split('weather').pop().trim();
            response = city ? await getWeatherForecast(city) : "Please enter a city name along with your weather request.";
          }
          else
          {
          const result = await chatSession.sendMessage(message);
          response=result.response.text();
          }
          res.send({data:response})
       
    }
    catch(err){
        console.log(err);
    }
    
   
};


exports.gemini=async (req,res)=>{

    try{

        console.log(req.body.message);
        const result= await chatSession.sendMessage(req.body.message);
        // console.log(result);
        res.status(200).send({'status':true,'data':result.response.text()});

    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }

}


exports.image = async (req, res)=>{
    try{
        
        const file = req.files.file;
        const question=req.query.question;
        console.log(file);
        console.log(question);
        
        const filename = `./uploads/${Date.now()}.jpg`;
        console.log(filename);
        
        file.mv(filename, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("File uploaded successfully");
            }
        });
        

    const pythonProcess = spawn('python', ['./AI/vqa.py', filename, question]);

    let scriptOutput = '';

    pythonProcess.stdout.on('data', (data) => {
        scriptOutput += data.toString();
    });

    console.log(scriptOutput);
    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });


    pythonProcess.on('close', (code) => {

        console.log(`Python script exited with code ${code}`);
        fs.unlink(filename, (err) => {
            if (err) console.error(err);
        });
        if (code !== 0) {
            return res.status(500).json({ error: 'Python script failed' });
        }
        res.status(200).send({'status':true, data: scriptOutput.trim() });

    });

    }

    catch(err)
    {
        console.log(err);
        res.status(500).send({'data':err});
    }

}


exports.audio=async(req,res) =>{

    try{
        const audiofile = req.files.audioFile;
        console.log('File uploaded:', audiofile);
        const filename = `./uploads/${Date.now()}.mp3`;
        console.log(filename);
        
        audiofile.mv(filename, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("File uploaded successfully");
            }
        });
    

        res.status(200).send('File uploaded successfully');
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }

}



