import inquirer from 'inquirer';


export { showMenuOptions,pause,readInput };


const showMenu= ()=>{
    console.clear()
    console.log("=======================")
    console.log("          MENU         ")
    console.log("=======================")
}

const questions = [{
    type:"list",
    name:"option",
    message:"What do you want to do?",
    choices:[{
        value: 1,
        name:"Search City"
        },
        {
            value: 2,
            name:"History"
        },
        {
            value: 0,
            name:"exit"
        },
    ]
}]

const showMenuOptions = async()=>{
    showMenu();
    const opt = await inquirer.prompt(questions);
    return opt
}

const pause =async()=>{
    return inquirer.prompt([{type:'input',name:"exit",message:"press "+"ENTER".green+" to continue"}])
}


const readInput=async( message )=>{
    const question= [
        {type:'input',
        name:"desc",
        message:message,
        validate(value){
            if (value.length>0){
                return true
            }
            return "ingrese un valor"
        }
    }]
    const {desc}=await inquirer.prompt(question);
    return desc;
}

