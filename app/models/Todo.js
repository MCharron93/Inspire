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
    <i class="bi bi-trash" onclick="app.todoController.removeTodo('${this.id}')"></i>
   </div>
    `
  }

  get ToggledText() {
    let description = `<h4>${this.description}</h4>`
    let striked = `<h4><s>${this.description}</s></h4>`
    if (this.completed) {
      return striked
    } else {
      return description
    }
  }
  get ToggledButton() {
    let checkButton = `</div>
    <i class="bi bi-check2-circle" onclick="app.todoController.toggleTodoStatus('${this.id}')"></i>`
    let doneButton = `</div><i class="bi bi-arrow-counterclockwise" onclick="app.todoController.toggleTodoStatus('${this.id}')"></i>`
    if (this.completed) {
      return doneButton
    } else {
      return checkButton
    }
  }

}