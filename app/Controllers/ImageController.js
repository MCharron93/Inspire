import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
  constructor() {
    console.log("Controller Connected");
    this.getImage()
    _drawBackground()

    function _drawBackground() {
      document.body.style.backgroundImage = ProxyState.background
    }
  }

  getImage() {
    try {
      imageService.getImage()
    } catch (error) {
      console.error(error)
    }
  }

}