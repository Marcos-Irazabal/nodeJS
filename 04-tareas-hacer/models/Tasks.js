import { Task } from "./Task.js";

export { Tasks };
class Tasks{

    _items = { };

    constructor(){
        this._items = {};
    }

    addItem=( description )=>{
        let task = new Task(description);
        this._items[task.id]=task;
    }
}