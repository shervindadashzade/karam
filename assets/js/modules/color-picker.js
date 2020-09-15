let selectedColor = 'var(--primary)';
export let colorPicker = { 
    init(){
        let colors = document.querySelector('.color-picker .colors');
        let circle = document.querySelector('.color-picker .circle');
        for(let color of colors.children){
            color.onclick = () =>{
                selectedColor = color.style.background;
                circle.style.background = color.style.background;
                document.querySelector('.color-picker .color.select').classList.remove('select');
                color.classList.add('select');
            }
        }
    },
    getSelectedColor(){
        return selectedColor;
    }
}