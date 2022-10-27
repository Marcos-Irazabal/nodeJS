import { Task } from "./Task.js";
import inquirer from 'inquirer';
import colors from 'colors';

export { Tasks };
class Tasks{

    items= [];

    constructor(){
        this.items = [];
    }

    getArray(){
        return this.items
    }

    addItem=( description )=>{
        let task2 =new Task(description);
        this.items.push(task2);
    }

    createArrayFromDatabase=(arr)=>{
        for (let i=0; i<arr.length ; i++){
            this.items.push(arr[i])
        }
    }

    listTasks=()=>{
        this.items.forEach( (item,i) =>{
            let state="Pending".red
            if(item.endedAt!=null){
                state="Completed".green;
            }
            console.log((i+1).toString().green+") "+item.description+" :: "+state);
        })
        
    }

    listToDeleteTask= async( arr )=>{
        const choices= arr.map( (task,i) =>{
            return {
                value: task.id,
                name: (i+1).toString().green+task.description
            }
        })
        const questions={
            type:"list",
            name:"id",
            message:"Borrar",
            choices:choices
        }

        const choice = await inquirer.prompt(questions);
        return choice
    }

    listToComplete= async( arr )=>{
        const choices= arr.map( (task,i) =>{
            return {
                value: task.id,
                name: (i+1).toString().green+task.description,
                checked:"true"
            }
        })
        const question={
            type:"checkbox",
            name:"ids",
            message:"Selections",
            choices:choices
        }

        const choice = await inquirer.prompt(question);
        return choice
    }

    markAsCompleted=(ids)=>{
        let text=""
        Object.keys(ids).forEach(key => {
            text =ids[key].toString();
        })
        console.log(text)
        const myArray = text.split(",");
        myArray.forEach(id=>{
            console.log(id)
            this.items.forEach(item=>{
                if(id==item.id){
                    console.log("cambio")
                    item.endedAt=Date.now()
                }
            })
        })
    }

}