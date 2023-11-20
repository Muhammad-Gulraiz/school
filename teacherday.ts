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
const TeacherOfDay1 = new TeacherOfDay("Sir Mazhar", "SST", "Monday", 10,true,false)
const TeacherOfDay2 = new TeacherOfDay("Sir Adeel", "SST", "Tuesday", 15,true,false)
const TeacherOfDay3 = new TeacherOfDay("Sir Yasir", "SST", "Wednesday",11 ,false,true)
const TeacherOfDay4 = new TeacherOfDay("Sir Kaleem", "SST", "Thursday", 8,true,false)
let a = TeacherOfDay1, b = TeacherOfDay2, c = TeacherOfDay3, d = TeacherOfDay4
console.log(a,b,c,d)