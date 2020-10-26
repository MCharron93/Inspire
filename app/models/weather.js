export default class Weather {
  constructor(data) {
    // console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin
    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try
    this.city = data.name
    this.kelvin = data.main.temp
    this.visibility = data.weather[0].main

    if (this.kelvin > 200) {
      let fahrenheit = Math.floor(1.8 * (this.kelvin - 273) + 32)
      this.kelvin = fahrenheit
    }
    return this.kelvin
  }


  get Template() {
    return /*html */`
    <div class="col-4 text-right">
    <h4>${this.city}</h4>
    <h4>${this.kelvin}&#176; F</h4>
    <h4>${this.visibility}</h4>
    </div>
    `
  }

  // ${this.Toggle}
  // get Toggle() {
  //   if (this.kelvin > 50) {
  //     let celsius = Math.floor(0.555556 * (this.kelvin - 32))
  //     return /*html*/ `<h4 id="temp" onclick="app.weatherController.toggleTemp()">${celsius}&#176; C</h4>`
  //   } else {
  //     return /*html*/ `<h4 id="temp" onclick="app.weatherController.toggleTemp()">${this.kelvin}&#176; F</h4>`
  //   }
  // }
}