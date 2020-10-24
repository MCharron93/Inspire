import { ProxyState } from "../AppState.js"
import quoteService from "../Services/QuoteService.js"

//TODO Create methods for constructor, and rendering the quote to the page
function _drawQuote() {
  let quote = ProxyState.quote
  document.getElementById("quote").innerHTML = quote.Template
}


function _mouseOver() {
  let quote = ProxyState.quote
  document.getElementById("hover").innerHTML = quote.Author
}

function _mouseOut() {
  let quote = ProxyState.quote
  document.getElementById("leave").innerHTML = quote.Template
}
export default class QuoteController {
  constructor() {
    // console.log("Quote Controller");
    ProxyState.on("quote", _drawQuote)
  }

  getQuote() {
    try {
      quoteService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }
}