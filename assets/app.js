import {addWorkDialog} from './js/add-work-dialog.js';
import store from './js/modules/store.js';

document.querySelector('.logo').onclick = ()=>{
    console.log(store.todos);
}