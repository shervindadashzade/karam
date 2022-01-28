import { addWorkDialog } from './js/add-work-dialog.js';
import render from './js/modules/todo-render.js';
import store from './js/modules/store.js';
import deleteWorkDialogFactory from './js/delete-work-dialog.js';
import Request from './js/api/request.js';


// first render
render();

// decleare some functions for index.html
function doTodo(id){
    let selectedTodo;
    for(let todo of store.todos){
        if(todo.id == id){
            selectedTodo = todo;
            break;
        }
    }
    let data = new FormData()
    data.append('id',id);
    new Request('/update.php','POST', data,(txt) => console.log(txt),(err) => console.log(err));
    selectedTodo.done = true;
    render();
}
window.doTodo = doTodo;

function deleteTodo(id){
    deleteWorkDialogFactory.setId(id);
    let selectedTodo;
    for(let todo of store.todos){
        if(todo.id == id){
            selectedTodo = todo;
            break;
        }
    }
    deleteWorkDialogFactory.deleteWorkDialog.content = `<h4>آیا واقعا می خواهید <strong>${ selectedTodo.title }</strong> را حذف کنید ؟</h4>`;
    deleteWorkDialogFactory.deleteWorkDialog.toggle();
}
window.deleteTodo = deleteTodo;