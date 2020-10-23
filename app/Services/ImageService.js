import { ProxyState } from "../AppState.js"
import Image from "../Models/Image.js";
import { api } from "./AxiosService.js";
//TODO create methods to retrieve data and save to the State
class ImageService {
  constructor() {
    // console.log("Image Service");
    this.getImage()
  }

  async getImage() {
    let res = await api.get("images")
    // console.log(res.data);
    ProxyState.background = new Image(res.data)
  }

}

const imageService = new ImageService();
export default imageService;