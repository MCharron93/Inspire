import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js";
//TODO create methods to retrieve data and save to the State
class ImageService {
  constructor() {
    console.log("Image Service");
  }

  async getImage() {
    let res = await api.get("images")
    console.log(res);
  }

}

const imageService = new ImageService();
export default imageService;