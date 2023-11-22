export class Roznamcha{
    name:string;
    total:number
    present:number;
    leave:number;
    absent:number
    constructor(name:string,total:number,present:number,leave:number,absent:number){
        this.name=name
        this.total=total
        this.present=present
        this.leave=leave
        this.absent=absent
    }
    QuaidBlock(){
        return 'Roznamcha name is ${this.name}'
    }
    AhmerBlock(){
        return 'total strength is ${this.total} and presents are ${this.present}'
    }
    LiaqatBagh(){
        return 'on leave are ${this.leave}and on absent are ${this.absent}'
    }    
}
