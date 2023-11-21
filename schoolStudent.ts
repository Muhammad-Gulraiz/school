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
const student1= new student("Hamza",14,"Ali Raza",49, "Lahore")
const student2= new student("Zaheer",13,"Zafar Iqbal",50, "Chandra")
const student3= new student("Saad",15,"Nisaar ahmed",51, "darapur")
const student4= new student("Aoun",16,"Ashraf Ahmed",52, "Tillajogyan")

console.log(student1,student2,student3)