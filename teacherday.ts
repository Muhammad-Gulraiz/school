export class TeacherOfDay{
    name:string;
    designation:string;
    day:string;
    complain:number;
    fine:boolean;
    forgiveness:boolean
    constructor(name:string,designation:string,day:string,complain:number,fine:boolean,forgiveness:boolean){
        this.name=name
        this.designation=designation
        this.day=day
        this.complain=complain
        this.fine=fine
        this.forgiveness=forgiveness
    }
    Assembli(){
        return 'Teacher name is ${this.name} and his designation is ${this.designation}'
    }
    Midtime(){
        return 'day is ${this.day} and complain are ${this.complain} and fines are ${this.fine}'
    }
    finalTime(){
        return 'forgiveness are ${this.forgiveness}'
    }
}
