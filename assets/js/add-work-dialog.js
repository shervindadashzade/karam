import dialogBox from './modules/dialog.js';

export let addWorkDialog = new dialogBox({
    title : 'اضافه کردن کار جدید',
    content: `
    <input class="text-field" type="text" placeholder="عنوان کار">
                <textarea class="text-area" placeholder="توضیحات کار"></textarea>
                <div class="color-select">
                    <h3>رنگ کار ( بر اساس رنگ )</h3>
                    <div class="color-picker">
                        <div class="circle" style="background:var(--primary);"></div>
                        <div class="colors">
                            <div class="color" style="background: var(--primary);"></div>
                            <div class="color" style="background: var(--yellow);"></div>
                            <div class="color select" style="background: var(--blue);"></div>
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
        function: null,
        enable: true
    }
});
document.querySelector('.btn-fab').onclick = () => { addWorkDialog.toggle() };
