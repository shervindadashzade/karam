import { addWorkDialog } from './js/add-work-dialog.js';
import render from './js/modules/todo-render.js';
import store from './js/modules/store.js';
import deleteWorkDialogFactory from './js/delete-work-dialog.js';
// first render
render();

// decleare some functions for index.html
function doTodo(id){
    store.todos[id].done = true;
    render();
}
window.doTodo = doTodo;

function deleteTodo(id){
    deleteWorkDialogFactory.setId(id);
    deleteWorkDialogFactory.deleteWorkDialog.content = `<h4>آیا واقعا می خواهید <strong>${ store.todos[id].title}</strong> را حذف کنید ؟</h4>`;
    deleteWorkDialogFactory.deleteWorkDialog.toggle();
}
window.deleteTodo = deleteTodo;