import { v4 as uuidv4 } from 'uuid';
export { Task };
class Task{
    
    id="";
    description="";
    endedAt=null;

    constructor(d){
        this.id=uuidv4();
        this.description=d;
    }
}
