import dialogBox from './modules/dialog.js';
import store from './modules/store.js';
import render from './modules/todo-render.js';
import Request from './api/request.js';
let id;
function setId(newid) {
    id = newid;
}
function deleteTodo(){
    let splice_id;
    for(let todo of store.todos){
        if(todo.id == id){
            splice_id = store.todos.indexOf(todo)
        }
    }
    let data= new FormData()
    data.append('id',id);
    new Request('/delete.php','POST',data,(txt)=>{
        console.log(txt)
    },(err)=> console.log(err));
    store.todos.splice(splice_id,1);
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