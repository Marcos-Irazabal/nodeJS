import { readInput, showMenuOptions,pause} from "./helpers/inquirer.js";
import {Busqueda} from "./Models/Busqueda.js"

const main=async()=>{
    let option=1;
    let search = new Busqueda()
    while (option.option !== 0){
        option=await showMenuOptions();

        switch (option.option) {
            case 1:
                let input = await readInput("City: ");
                await search.searchCity(input)
            break;
            case 2:
                console.log("History selected")
            break;
        }
        if(option.option !== 0){
            await pause();
        }
    }

}

main();