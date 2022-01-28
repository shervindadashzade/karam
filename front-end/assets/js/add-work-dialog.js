import dialogBox from './modules/dialog.js';
import {colorPicker} from './modules/color-picker.js';
import Todo from './modules/todo-class.js';
import store from './modules/store.js';
import render from './modules/todo-render.js';
import Request from './api/request.js';
function addTodo(){
        // TODO::handle error if title and desc was empty
       let titleElement = document.querySelector('.dialog-box .text-field');
       let descElement = document.querySelector('.dialog-box .text-area');
       let data = new FormData()
       data.append('title',titleElement.value)
       data.append('desc',descElement.value)
       data.append('color',colorPicker.getSelectedColor())
       let id;
       new Request('/todo.php','POST',data,(txt)=>{
           id = txt
       },
       (err)=>{
           console.log(err)
       })
       store.todos.push(new Todo(id,titleElement.value,descElement.value,colorPicker.getSelectedColor(),false));
       addWorkDialog.toggle();
       // TODO::perhaps better method for better performance
       addWorkDialog.reset();
       render();
}
export let addWorkDialog = new dialogBox({
    title : 'اضافه کردن کار جدید',
    content: `
    <input class="text-field" type="text" placeholder="عنوان کار" required>
                <textarea class="text-area" placeholder="توضیحات کار" required></textarea>
                <div class="color-select">
                    <h3>رنگ کار ( بر اساس رنگ )</h3>
                    <div class="color-picker">
                        <div class="circle" style="background:var(--primary);"></div>
                        <div class="colors">
                            <div class="color select" style="background: var(--primary);"></div>
                            <div class="color" style="background: var(--yellow);"></div>
                            <div class="color" style="background: var(--blue);"></div>
                            <div class="color" style="background: var(--purpele);"></div>
                        </div>
                    </div>
                </div>
    `,
    redButton: {
        enable: true
    },  
    greenButton:{
        caption: 'تایید',
        function: addTodo,
        enable: true
    }
});
document.querySelector('.btn-fab').onclick = () => { 
    addWorkDialog.toggle(); 
    colorPicker.init();
};
