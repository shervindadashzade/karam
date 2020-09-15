import store from './store.js';
let todosContainerElement = document.querySelector('#todo');
let donesContainerElement = document.querySelector('#done');
function donethis(){
    console.log('hi');
}
export default function render(){
    todosContainerElement.innerHTML = '';
    donesContainerElement.innerHTML = '';
    let i=0;
    for(let todo of store.todos){
        if(todo.done){
            donesContainerElement.innerHTML += `
            <div class="card-box done">
                    <div class="info">
                        <div class="title">
                            <div class="circle" style="background:var(--green)"></div>
                            <h2>${todo.title}</h2>
                        </div>
                        <h4>${todo.desc}</h4>
                    </div>
                    <div class="actions">
                        <button class="btn icon-btn" onclick='deleteTodo(${i})' ><i class="fas fa-trash color-primary"></i></button>
                    </div>
                </div>
            `;
        }else{
            todosContainerElement.innerHTML += `
            <div class="card-box">
                    <div class="info">
                        <div class="title">
                            <div class="circle" style="background:${todo.color}"></div>
                            <h2>${todo.title}</h2>
                        </div>
                        <h4>${todo.desc}</h4>
                    </div>
                    <div class="actions">
                        <button class="btn icon-btn" onclick='doTodo(${i})' ><i class="fas fa-check color-secondery"></i></button>
                        <button class="btn icon-btn" onclick='deleteTodo(${i})' ><i class="fas fa-trash color-primary"></i></button>
                    </div>
                </div>
            `;
        }
        i++;
    }
}