import dialogBox from './modules/dialog.js';
import store from './modules/store.js';
import render from './modules/todo-render.js';

let id;
function setId(newid) {
    id = newid;
}
function deleteTodo(){
    store.todos.splice(id,1);
    deleteWorkDialog.toggle();
    render();
}
let deleteWorkDialog = new dialogBox({
    title: 'آیا مطمین هستید ؟',
    content: `<h4>آیا واقعا می خواهید را حذف کنید ؟</h4>`,
    greenButton:{
        caption : 'بله',
        enable : true,
        function : deleteTodo,
    }
});
let deleteWorkDialogFactory = {
    deleteWorkDialog,
    setId,
}; 
export default deleteWorkDialogFactory;