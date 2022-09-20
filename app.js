const express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Ljubljana,slo&appid=ENTER_YOUR_API_KEY_HERE&units=metric";

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      
    });
  });


  res.send("Server is running");
});

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
