import colors from 'colors';

import { pause,showMenuOptions,readInput} from "./helpers/mensajes.js";
import { Tasks } from './models/Tasks.js';
import { saveData,getData,deleteData } from './helpers/db_administrator.js';

const main=async()=>{
    let opt ="";
    let tasks= new Tasks();

    if (getData()!=null){
        tasks.createArrayFromDatabase(getData())
    }
    

    while (opt.option != "0"){
        opt =await showMenuOptions();

        switch (opt.option) {
            case "1":
                let input = await readInput("Description: ");
                tasks.addItem(input)
            break;
            case "2":
                tasks.listTasks();
            break;
            case "3":
                const ids = await tasks.listToComplete(tasks.getArray())
                tasks.markAsCompleted(ids);
            break;
            case "4":
                let to_delete = await tasks.listToDeleteTask(tasks.getArray())
                deleteData(tasks.getArray(),to_delete.id)
            break;
        }
        saveData(tasks.getArray())
        await pause();
    }
}

main();