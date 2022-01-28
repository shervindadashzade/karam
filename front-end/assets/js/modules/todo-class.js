class Todo{
    constructor(id,title,desc,color,done){
        this.id = id;
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