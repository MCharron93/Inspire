import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js";
import { api } from "../Services/AxiosService.js"

//TODO create methods to retrieve data and update the State
class QuoteService {
  constructor() {
    // console.log("Quote Service");
    this.getQuote()
  }

  async getQuote() {
    let res = await api.get("quotes")
    ProxyState.quote = new Quote(res.data.quote)

    console.log(ProxyState.quote);
  }
}

const quoteService = new QuoteService();
export default quoteService;