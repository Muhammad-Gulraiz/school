class jada{
    name:string;
    age:number

    constructor(n:string,a:number){
        this.name=n
        this.age=a
    }
    jadaFunc():string{
        return 'jada name is ${this.name}, his age is ${this.age}'

    }
}
const jada1 = new jada("Bushra",12)
const jada2 = new jada("imran khan",25)
const jada3 = new jada("sweet",88 )

console.log(jada1,jada2,jada3)

========================================================================

class student{
    name:string;
    age:number;
    rollnumber:number;
    hobbies:string

    constructor(n:string,a:number,r:number,h:string){
        this.name=n
        this.age=a
        this.rollnumber=r
        this.hobbies=h
    }
    studentFunc():string{
        return 'student name is ${this.name}, and student age is ${this.age}, and rollnumber is ${this.rollnumber}, and hobbies are ${this.hobbies}'
    }
}

const student1 = new student("Archemidas",12,511,"cricket")
const student2 = new student("Harlc", 22, 789, "footbal")
const student3 = new student("pakistan", 55, 111, "Hockey")

let x:student[]=[]
x.push(student1)
x.push(student2)
x.push(student3)
console.log(x)