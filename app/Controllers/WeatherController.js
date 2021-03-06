import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawWeather() {
  // console.log("THE WEATHER MAN SAYS:", ProxyState.weather)
  let weather = ProxyState.weather
  document.getElementById("weather").innerHTML = weather.Template
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }

  // toggleTemp() {
  //   weatherService.toggleTemp()
  // }
}
