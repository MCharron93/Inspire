export default class Todo {
  constructor(data) {
    this.id = data._id
    this.completed = data.completed
    this.description = data.description
  }

  get Template() {
    return /*html*/`
    <div class="col-4 p-2">
    ${this.ToggledText}
    <div>
    ${this.ToggledButton}
    <button class="btn btn-danger btn-sm" onclick="app.todoController.removeTodo('${this.id}')">&times</button></div>
</div>
    `
  }

  get ToggledText() {
    let description = `<h3>${this.description}</h3>`
    let striked = `<h3><s>${this.description}</s></h3>`
    if (this.completed) {
      return striked
    } else {
      return description
    }
  }
  get ToggledButton() {
    let checkButton = `</div><button class="btn btn-success btn-sm" onclick="app.todoController.toggleTodoStatus('${this.id}')">&#10003</button>`
    let doneButton = `<button class="btn btn-warning btn-sm" onclick="app.todoController.toggleTodoStatus('${this.id}')"><i class="fas fa-undo"></i></button>`
    if (this.completed) {

      return doneButton
    } else {
      return checkButton
    }
  }

}