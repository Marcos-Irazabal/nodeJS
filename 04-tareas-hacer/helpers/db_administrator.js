import fs from 'node:fs';

const file="./db/data.json";

export { saveData,getData,deleteData};

const saveData=(data)=>{
    fs.writeFileSync(file, JSON.stringify(data));
}

const getData=()=>{
    if (fs.existsSync(file)){
        const json_file =fs.readFileSync(file,{ encoding:"utf-8"})
        return JSON.parse(json_file);
    }
    return null
}


const deleteData=(arr,id)=>{
    arr.forEach( (task,i) =>{
        if(task.id==id){
            arr.splice(i,1)
        }
    })
}
