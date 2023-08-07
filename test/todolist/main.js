const API_URL = "http://localhost:3000/todos"

let todoApis = {
  getAllTodo() {
    return axios.get(API_URL)
  },
  creatTodo(newTodo) {
    return axios.post(API_URL, newTodo)
  },
  updateTodo(todo) {
    const { id, ...updated } = todo
    return axios.put(`${API_URL}/${id}`,updated)
  },
  deleteTodo(id) {
    return axios.delete(`${API_URL}/${id}`)
  }
}


const ulEl = document.querySelector('#list')
//Hiển thị
const getAllTodo = async() => {
  try {
    let rs = await todoApis.getAllTodo()
    renderTodo(rs.data)
  } catch (error) {
    console.log(error)
  }
}
getAllTodo()

function renderTodo(data){
  if(data.length == 0){
    ulEl.innerHTML = `<li>Không có công việc nào</li>`
    return
  }
  data.forEach(e => {
    ulEl.innerHTML += `
                      <li>
                        <input type="checkbox" ${e.status ? "checked" : ""} onclick="toggleStatus(${e.id})">
                        <span class="${e.status ? "active" : ""}">${e.title}</span>
                        <button onclick="editTodo(${e.id})">Edit</button>
                        <button onclick="deleteTodo(${e.id})">Delete</button>
                      </li>`
  });
}