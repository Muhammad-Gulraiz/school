class Roznamcha{
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
const Roznamcha1 = new Roznamcha("class seven",55,45,3,7)
const Roznamcha2 = new Roznamcha("class eight",50,46,3,1)
const Roznamcha3 = new Roznamcha("class nine",65,52,3,10)
const Roznamcha4 = new Roznamcha("class ten",42,35,3,4)
let o = Roznamcha1, j = Roznamcha2, k = Roznamcha3, l= Roznamcha4
console.log(o,j,k,l)


class register{
    name:string;
    page:number;
    items: number;
    incharge:string
    constructor(name:string,page:number,items:number,incharge:string){
        this.name=name,
        this.page=page,
        this.items=items,
        this.incharge=incharge
    }
    schoolregister(){
        return 'register name is ${this.name} and pages are ${this.page}'
    }
}
const register1 =new register("admission",100,90, "naveed")
const register2 =new register("science lab",100,90, "yasir")
const register3 =new register("compute",100,90, "Ahtesham")
const register4 =new register("physics", 200, 25, "haider sb")
console.log(register1,register2,register3,register4)

class rooms{
    name:string;
    door:number;
    qty:number;
    windows:number
    constructor(name:string,door:number,qty:number,windows:number){
        this.name=name,
        this.door=door,
        this.qty=qty,
        this.windows=windows
    }
    clerkroom(){
        return 'qty of stock instruments are ${this.qty}'
    }
    schoolHall(){
        return 'school doors are ${this.door}'
    }
    school(){
        return 'school rooms are ${this.name} and  windows are{this.windows}'
    }     
}
const rooms1 = new rooms("headmaster room", 1,1,4)
const rooms2 = new rooms("computer lab ", 2,2,4)
const rooms3 = new rooms("headmaster room", 2,1,4)
const rooms4 = new rooms("headmaster room", 1,1,3)

console.log(rooms2)

class schoolresult{
    name:string;
    English:number;
    Urdu:number;
    Islamiat:number;
    Pakstudy:number;
    Maths:number;
    Physics:number;
    Chemistery:number;
    BiologyComputer:number

    constructor(name:string,English:number,Urdu:number,Islamiat:number,Pakstudy:number,Maths:number,Physics:number,Chemistery:number,BiologyComputer:number){
        this.name=name
        this.English=English
        this.Urdu=Urdu
        this.Islamiat=Islamiat
        this.Pakstudy=Pakstudy
        this.Maths=Maths
        this.Physics=Physics
        this.Chemistery=Chemistery
        this.BiologyComputer=BiologyComputer

    }
    students(){
        return 'result name is ${this.name}  and English is ${this.English}'
    }
    ArtsSubjects(){
        return 'schoolresult of Urdu is ${this.Urdu} and Islamiat is ${this.Islamiat} and Pak-study is ${this.Pak-study}'
    }
    ScienceSubjects(){
        return 'scienceresult is ${this.Maths} and Physics is ${this.Physics} and chemistery is ${this.Chemistery} and biology is ${this.Biology/Computer}'
    }
}
const schoolresult1 = new schoolresult("Saboor", 72, 73, 49, 47, 75, 64, 60, 45)
const schoolresult2 = new schoolresult("Haseeb", 62, 50, 32, 34, 74, 71, 57, 61)
const schoolresult3 = new schoolresult("Danial", 56, 63, 39, 41, 70, 54, 60, 55)
const schoolresult4 = new schoolresult("Zubair", 42, 53, 42, 39, 65, 73, 58, 60)

let u = schoolresult1, n = schoolresult2, p= schoolresult3, s= schoolresult4
console.log(u,n,p,s)

class student{
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


class staff{
    name:string;
    age:number;
    qualification:string;
    id:string;
    service:string;
    adress: string
    constructor(name:string,age:number,qualification:string,id:string,service:string,adress:string){
        this.name=name
        this.age=age
        this.qualification= qualification
        this.id=id
        this.service= service
        this.adress= adress
    }
    schoolstaff():string{
        return 'staff name is ${this.name}, and his age is ${this.age}, and his qualification is ${this.qualification}, and his id is ${this.id}, and his service is ${this.service}, and his adress is ${this.adress}'
    }       
}
const staff1 = new staff("Ishtiaq-headmaster",52,"M.A,M.ed","iceland","31years","near:islamia school")
const staff2 = new staff("jabran-sst",39,"M.phil,M.ed","house","12years","kalagujran jhelum")
const staff3 = new staff("Haroon-est",40,"mcs,b.ed","water","18years","daryala jhelum")

// let x:staff[] = []

// x.push(staff1)
// x.push(staff2)
// x.push(staff3)
// console.log(x)
console.log(staff1,staff2,staff3)


class TeacherOfDay{
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