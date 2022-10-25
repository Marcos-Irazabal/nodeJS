import colors from 'colors';

import { pause,showMenuOptions,readInput} from "./helpers/mensajes.js";
import { Tasks } from './models/Tasks.js';

const main=async()=>{
    let opt ="";
    let tasks= new Tasks();

    while (opt.option != "0"){
        opt =await showMenuOptions();

        switch (opt.option) {
            case "1":
                let input = await readInput("Description: ");
                tasks.addItem(input)
            break;
            case "2":
                console.log(tasks._items)
            break;
        }
        await pause();
    }
}

main();