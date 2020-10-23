import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() {
  // NOTE this should render the todo display w/ tasks listed
  let template = ""
  let list = ProxyState.todos
  list.forEach(l => template += l.Template)
  document.getElementById("todo-list").innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    todoService.getTodos()
    ProxyState.on("todos", _drawTodos)
    _drawTodos()
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    //TODO build the todo object from the data that comes into this method
    var todo = {
      description: form.description.value
    };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }

    form.reset()
  }
  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }
  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}