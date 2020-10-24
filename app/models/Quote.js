export default class Quote {
  constructor(data) {
    this.body = data.body
    this.author = data.author
    this.id = data.id
  }

  get Template() {
    return /*html*/`
    <div className="col-10" id="hover">${this.body}</div>
    `
  }

  get Author() {
    return /*html*/`
    <div className="col-10" id="revert">${this.author}</div>
    `
  }
}