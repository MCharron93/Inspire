import { ProxyState } from "../AppState.js"
import { api } from "../Services/AxiosService.js"
import imageService from "../Services/ImageService.js"
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
function _drawBackground() {
  let imgurl = ProxyState.background.url
  document.body.style.backgroundImage = `url('${imgurl}')`
}
export default class ImageController {
  constructor() {
    // console.log("Controller Connected");
    // this.getImage()
    ProxyState.on("background", _drawBackground)
  }

  getImage() {
    try {
      imageService.getImage()
    } catch (error) {
      console.error(error)
    }
  }

}