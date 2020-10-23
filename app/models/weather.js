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

    if (this.kelvin > 105) {
      this.kelvin = Math.floor(1.8 * (this.kelvin - 273) + 32)
    }

  }


  get Template() {
    return /*html */`
    <h4>${this.city}</h4>
    <h4>${this.kelvin} F</h4>
    <h4>${this.visibility}</h4>

    `
  }
}