import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'michelle/todos/'


class TodoService {
  constructor() {
    this.getTodos()
  }
  async getTodos() {
    let res = await api.get("michelle/todos")
    // console.log(res.data.data)
    // let todoCount = ProxyState.todos.length
    ProxyState.todos = res.data.data.map(rawTodoData => new Todo(rawTodoData))
  }
  async addTodo(todo) {
    let res = await api.post("michelle/todos", todo)
    this.getTodos()
  }
  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId)
    todo.completed = !todo.completed
    // if (todo.completed == false) {
    //   return todo.completed = true
    // } else {
    //   return todo.completed = false
    // }
    // console.log(todo.completed)
    let res = await api.put(url + todoId, todo)
    this.getTodos()
  }
  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    let todo = await ProxyState.todos.find(todo => todo.id == todoId)
    let res = await api.delete(url + todoId, todo)
    // console.log(res)
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;