
const URL= 'https://api.openweathermap.org/data/2.5/';
const API_KEY='08e2d765a08e2acd57862eb6a83a3ab6'
var rawData;

function getWeather (lat,lon){

  fetch(`${URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`).then(res=>{
    return res.json();///convert the resopnose from Json to Javascript Object
  }).then(data=>{
    console.log(data)
    var results=(data.list);
  

  
    for (let index = 0; index < results.length; index++) {
      console.log(results[index])
      
    }
  


  updateCards(data)


if(data.city.name !=""){
  if(window.localStorage.getItem(data.city.name+"lat")==null){
    let el=$(`<p>${data.city.name}<p>`)
  
    el.click(function(){
      let latCity=window.localStorage.getItem(data.city.name+"lat")
      let lonCity=window.localStorage.getItem(data.city.name+"lon")
      getWeather(latCity,lonCity)
    })
  
    $(".list-cities").append(el)
  }

}

window.localStorage.setItem(data.city.name+"lat",data.city.coord+lat)
window.localStorage.setItem(data.city.name+"lon",data.city.coord+lon)

//nothing telling when to get from localstorage

})

}

function updateCards(data){
  $(".today").html(data.city.name+""+data.list[0].dt_txt)

  let temp=data.list[0].main.temp
  if(temp<32){
    $(".today-icon").attr("src","images/snow.png")
  }else if(temp>=32&& temp<50){
    $(".today-icon").attr("src","images/cloudy.png")
  }else{
    $(".today-icon").attr("src","images/sunny.png")
  }

  $(".current-temp").html(data.list[0].main.temp)

  $(".mph").html(data.list[0].wind.speed+" ")

  $(".humidity").html(data.list[0].main.humidity)
  let arr=[]


}

getWeather(40,-73);

$(".submit-btn").click(function(e){
  e.preventDefault();

  let lat=$("#search-city-lat").val()
  let lon=$("#search-city-lon").val()

getWeather(lat,lon);
})





// //let el=$(`<p>${data.city.name}</p>`)
// el.click(function(){
//   let latCity=window.localStorage.getItem(data.city.name+"lat")
//   let lonCity=window.localStorage.getItem(data.city.name+"lon")
//   getWeather(latCity,lonCity)
// })////
