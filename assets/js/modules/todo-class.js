class Todo{
    constructor(title,desc,color,done){
        this.title = title;
        this.color = color;
        this.desc = desc;
        this.done = done;
    }
    setDone(){
        this.done = true;
    }
};
export default Todo;