export class student{
    name:string;
    age: number;
    fatherName: string;
    rollNumber: number;
    adress: string
    constructor(name:string,age:number,fatherName:string,rollNumber:number,adress:string){
        this.name=name,
        this.age=age,
        this.fatherName=fatherName,
        this.rollNumber=rollNumber,
        this.adress=adress
    }
    schoolstuden():string{
        return 'student name is ${this.name} and student age is ${this.age} and fatherName is ${this.fatherName}'
    }
}
