
const URL= 'https://api.openweathermap.org/data/2.5/';
const API_KEY='08e2d765a08e2acd57862eb6a83a3ab6'
var rawData;

function getWeather (lat,lon){

  fetch(`${URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`).then(res=>{
    return res.json();///convert the resopnose from Json to Javascript Object
  }).then(data=>{
    console.log(data)
    var results=(data.list);
  

  
   /* for (let index = 0; index < results.length; index++) {
      console.log(results[index])
      
    }
  
    */

  updateCards(data)


if(data.city.name !=""){
  if(window.localStorage.getItem(data.city.name+"-lat")==null){
    let el=$(`<p>${data.city.name}<p>`)
  
    el.click(function() {
      let latCity=window.localStorage.getItem(data.city.name +"-lat")
      let lonCity=window.localStorage.getItem(data.city.name+ "-lon")
      getWeather(latCity,lonCity)
    })
  
    $(".list-cities").append(el)
  }

}

window.localStorage.setItem(data.city.name+ "-lat", lat)
window.localStorage.setItem(data.city.name+ "-lon", lon)

//nothing telling when to get from localstorage

})

}

function updateCards(data){
  $(".today").html(data.city.name+" "+data.list[0].dt_txt.substring(0, 10))

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

  $(".card1-header").html(data.list[5].dt_txt.substring(0, 10))


  $(".current-temp1").html(data.list[5].main.temp)

  $(".mph1").html(data.list[5].wind.speed + " ")

  $(".humidity1").html(data.list[5].main.humidity)


 $(".card2-header").html(data.list[13].dt_txt.substring(0, 10))


  $(".current-temp2").html(data.list[13].main.temp)

  $(".mph2").html(data.list[13].wind.speed + " ")

  $(".humidity2").html(data.list[13].main.humidity)



  $(".card3-header").html(data.list[21].dt_txt.substring(0, 10))


  $(".current-temp3").html(data.list[21].main.temp)

  $(".mph3").html(data.list[21].wind.speed + " ")

  $(".humidity3").html(data.list[21].main.humidity)


  $(".card4-header").html(data.list[29].dt_txt.substring(0, 10))


  $(".current-temp4").html(data.list[29].main.temp)

  $(".mph4").html(data.list[29].wind.speed + " ")

  $(".humidity4").html(data.list[29].main.humidity)


  $(".card5-header").html(data.list[37].dt_txt.substring(0, 10))


  $(".current-temp5").html(data.list[37].main.temp)

  $(".mph5").html(data.list[37].wind.speed + " ")

  $(".humidity5").html(data.list[37].main.humidity)




}

getWeather(40, -73);

$(".submit-btn").click(function(e) {
  e.preventDefault();

  let lat = $("#search-city-lat").val()
  let lon = $("#search-city-lon").val()

  getWeather(lat, lon);
})

let list = allStorage()

for (let i = 0; i < list.length; i++) {
  if (list[i].includes("-lon")) {
    let name = list[i].replace("-lon", "");

    if (name != "") {
      let el = $(`<p>${name}</p>`)

      el.click(function() {

        let latCity = window.localStorage.getItem(name + "-lat")
        let lonCity = window.localStorage.getItem(name + "-lon")
        getWeather(latCity, lonCity)
      })

      $(".list-cities").append(el)
    }
  }
}



function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(keys[i]);
  }

  return values;
}

