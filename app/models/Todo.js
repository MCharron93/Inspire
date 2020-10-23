export default class Todo {
  constructor(data) {
    this.id = data._id
    this.completed = data.completed
    this.description = data.description
  }

  get Template() {
    return /*html*/`
    <div class="col-4 p-2">
    <h3>${this.description}</h3>
    ${this.ToggledButton}
    <button class="btn btn-warning" onclick="app.todoController.removeTodo('${this.id}')">&times</button>
</div>
    `
  }

  get ToggledButton() {
    let checkButton = `<button class="btn btn-success" onclick="app.todoController.toggleTodoStatus('${this.id}')">Done</button>`
    let doneButton = `<button class="btn btn-warning" onclick="app.todoController.toggleTodoStatus('${this.id}')">Undo</button>`
    if (this.completed) {
      return doneButton
    } else {
      return checkButton
    }
  }

}