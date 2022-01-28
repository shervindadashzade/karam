import Todo from './todo-class.js';
import Request from '../api/request.js';

let todos = [];
new Request('/todo.php','GET',[],(txt)=>{
    let json = JSON.parse(txt);
    for(let i=0; i<json.length;i++){
        todos.push(new Todo(json[i].id,json[i].title,json[i].description,json[i].color, parseInt(json[i].done) ? true : false))
    }
    
}, (txt)=>{
    console.log(txt);
})

console.log(todos)

let store = {
    todos,
};

export default store;