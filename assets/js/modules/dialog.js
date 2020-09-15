class dialogBox{
    constructor({title = 'عنوان',content=`<h3>محتوا</h3>`,redButton={
            'enable' : true
        },greenButton={
            'caption' : 'دکمه' ,
            'function' : null,
            'enable' : true
        }
    }){
        this.title = title;
        this.content = content;
        // red and green button object -> {title,function,enable}
        this.redButton = redButton;
        this.greenButton = greenButton;
        this.show = false;
        this.dialogBoxElement = document.querySelector('.dialog-box');
        this.blurElement = document.querySelector('.blur');
        this.overlayElement = document.querySelector('.overlay');
        this.config();
    }
    config(){
            let titleElement = document.querySelector('.dialog-box .title');
            let contentElement = document.querySelector('.dialog-box .content');
            let redButtonElement = document.querySelector('.dialog-box .actions .btn-primary');
            let greenButtonElement = document.querySelector('.dialog-box .actions .btn-secondery');
            titleElement.innerHTML = this.title;
            contentElement.innerHTML = this.content;
            greenButtonElement.innerHTML = this.greenButton.caption;
            if(!this.greenButton.enable){
                greenButtonElement.style.display = 'none';
            }
            if(!this.redButton.enable){
               redButtonElement.style.display = 'none';
            }
            greenButtonElement.onclick = this.greenButton.function;
            redButtonElement.onclick = ()=>{ this.toggle() };
    }
    toggle(){
        if(this.show){
            this.dialogBoxElement.style.display = 'none';
            this.overlayElement.style.display = 'none';
            this.blurElement.style.filter = 'blur(0px)';
            this.show = false;
        }else{
            this.dialogBoxElement.style.display = 'block';
            this.overlayElement.style.display = 'block';
            this.blurElement.style.filter = 'blur(8px)';
            // TODO:: perhaps change in future
            window.scrollTo(0,0);
            this.show = true;
        }
    }
}

export default dialogBox;