export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.url || data.large_urls
  }

}