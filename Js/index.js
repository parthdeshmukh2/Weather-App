let key ="4c3b7f638dccba306c4b39112d44555f";
let iframe = document.getElementById("gmap_canvas");


async function getWeather(){

    try {
        let city = document.getElementById("city").value;
        let url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`);

        let data = await url.json();
        let weatherData= data.list;
        showWeather2(weatherData);
        showWeather(weatherData);
        
          console.log(weatherData);  
    } catch (error) {
        console.log("err", error);
    }
    
}

 function showWeather2(weatherData){
    document.getElementById("left").innerHTML="";
 
     var city = document.getElementById("city").value;
    let name = document.createElement("h1");
    name.innerText = city;

    let temp = document.createElement("p");
    temp.innerText= `Temp-Max:- ${weatherData[0].main.temp_max}°C`;

    let temp2 = document.createElement("p");
    temp2.innerText= `Temp-Min:- ${weatherData[0].main.temp_min}°C`;

    let humidity = document.createElement("p");
    humidity.innerText =`Humidity:- ${weatherData[0].main.humidity}`;

    let wind = document.createElement("p");
    wind.innerText = `Wind-Speed:- ${weatherData[0].wind.speed}`;

    let weather = document.createElement("p");
    weather.textContent=`Weather:- ${weatherData[0].weather[0].description}`

    iframe.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    document.getElementById("left").append(name, temp,temp2, humidity, wind, weather )


}


function showWeather(weatherData){
    document.getElementById("nextData").innerHTML="";
 
    weatherData.map(function (elem, index){

    let div = document.createElement("div");
    div.setAttribute("id", "box");

    let date = document.createElement("h4");
    if(index==0){
        date.textContent="Sun";
    }
    else if(index==1){
        date.textContent="Mon";
    }
    else if(index==2){
        date.textContent="Tue";
    }
    else if(index==3){
        date.textContent="Wed";
    }
    else if(index==4){
        date.textContent="Thur";
    }
    else if(index==5){
        date.textContent="Fri";
    }
    else if(index==6){
        date.textContent="Sat";
    }
    
    let image = document.createElement("img");
   image.src = ` https://openweathermap.org/img/wn/${elem.weather[0].icon}.png`;

    let min_temp = document.createElement("p");
    min_temp.textContent= elem.main.temp_min;

    let max_temp = document.createElement("p");
    max_temp.textContent = elem.main.temp_max;

    div.append(date, image, min_temp, max_temp);
    document.getElementById("nextData").append(div); 
    
 });




// let days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
   
// // for(let a= 0; a<days.length; a++){
// // let day=days[a];
// // console.log(day);

// // }
// getDay(days); 
}