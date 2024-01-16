export class UserModel {
    public Name:string;
    public Task: string;
    public isCompleted:boolean;

    constructor(Name:string, Task:string, isCompleted:boolean){
        this.Name = Name;
        this.Task = Task;
        this.isCompleted = isCompleted;
    }
}
