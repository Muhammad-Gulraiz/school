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
