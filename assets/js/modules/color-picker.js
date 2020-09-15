export let colorPicker = { 
    init(){
        let colors = document.querySelector('.color-picker .colors');
        let circle = document.querySelector('.color-picker .circle');
        for(let color of colors.children){
            color.onclick = () =>{
                circle.style.background = color.style.background;
                document.querySelector('.color-picker .color.select').classList.remove('select');
                color.classList.add('select');
            }
        }
    },
}