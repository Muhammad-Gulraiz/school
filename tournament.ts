export class Tournament{
    name:string;
    fatherName:string;
    age:number;
    result:string
    awards:string
    constructor(name:string,fatherName:string,age:number,result:string,awards:string){
        this.name=name
        this.fatherName=fatherName
        this.age=age
        this.result=result
        this.awards=awards        
    }
    cricket(){
        return 'name of student is ${this.name} and his age is ${this.age}'
    }
    baketball(){
        return 'result of games is ${this.result}'
    }
    badminton(){
        return 'awards are ${this.awards}'
    }

}
const Tournament1 = new Tournament("Aashir","Afzal kyani",18,"winner","Gold medal")
const Tournament2 = new Tournament("Ahtezaz","Ahsan Danish",16,"winner","silver medal")
const Tournament3 = new Tournament("Asad Safeer","Asim Akram",20,"defeated","nill")
const Tournament4 = new Tournament("Hameed","Tahir",21,"winner","Trophy")


console.log(Tournament1,Tournament2,Tournament3,Tournament4)