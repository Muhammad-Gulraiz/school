import { Tournament } from "./tournament";

const Tournament1 = new Tournament("Aashir","Afzal kyani",18,"winner","Gold medal")
const Tournament2 = new Tournament("Ahtezaz","Ahsan Danish",16,"winner","silver medal")
const Tournament3 = new Tournament("Asad Safeer","Asim Akram",20,"defeated","nill")
const Tournament4 = new Tournament("Hameed","Tahir",21,"winner","Trophy")


console.log(Tournament1,Tournament2,Tournament3,Tournament4)

import { schoolresult } from "./schoolresult";


const schoolresult1 = new schoolresult("Saboor", 72, 73, 49, 47, 75, 64, 60, 45, 72)
const schoolresult2 = new schoolresult("Haseeb", 62, 50, 32, 34, 74, 71, 57, 61, 70)
const schoolresult3 = new schoolresult("Danial", 56, 63, 39, 41, 70, 54, 60, 55, 59)
const schoolresult4 = new schoolresult("Zubair", 42, 53, 42, 39, 65, 73, 58, 52, 60)

let u = schoolresult1, n = schoolresult2, p= schoolresult3, s= schoolresult4
console.log(u,n,p,s)

import { student } from "./schoolStudent";

const student1= new student("Hamza",14,"Ali Raza",49, "Lahore")
const student2= new student("Zaheer",13,"Zafar Iqbal",50, "Chandra")
const student3= new student("Saad",15,"Nisaar ahmed",51, "darapur")
const student4= new student("Aoun",16,"Ashraf Ahmed",52, "Tillajogyan")

console.log(student1,student2,student3)



import { Roznamcha } from "./roznamcha";

const Roznamcha1 = new Roznamcha("class seven",55,45,3,7)
const Roznamcha2 = new Roznamcha("class eight",50,46,3,1)
const Roznamcha3 = new Roznamcha("class nine",65,52,3,10)
const Roznamcha4 = new Roznamcha("class ten",42,35,3,4)
let o = Roznamcha1, j = Roznamcha2, k = Roznamcha3, l= Roznamcha4
console.log(o,j,k,l)

import { Staff } from "./schoolStaff";

const staff1 = new Staff("Ishtiaq-headmaster",52,"M.A,M.ed","iceland","31years","near:islamia school")
const staff2 = new Staff("jabran-sst",39,"M.phil,M.ed","house","12years","kalagujran jhelum")
const staff3 = new Staff("Haroon-est",40,"mcs,b.ed","water","18years","daryala jhelum")

// let x:staff[] = []

// x.push(staff1)
// x.push(staff2)
// x.push(staff3)
// console.log(x)
console.log(staff1,staff2,staff3)

import {register} from "./schoolRegister";

const register1 =new register("admission",100,90, "naveed")
const register2 =new register("science lab",100,90, "yasir")
const register3 =new register("compute",100,90, "Ahtesham")
const register4 =new register("physics", 200, 25, "haider sb")
console.log(register1,register2,register3,register4)


import { rooms } from "./rooms";

const rooms1 = new rooms("headmaster room", 1,1,4)
const rooms2 = new rooms("computer lab ", 2,2,4)
const rooms3 = new rooms("headmaster room", 2,1,4)
const rooms4 = new rooms("headmaster room", 1,1,3)

console.log(rooms2)

import { physicslab } from "./physicsLab";


const physicslab1 = new physicslab("vernier caliper", 10)
const physicslab2 = new physicslab("screw guage", 8)
const physicslab3 = new physicslab("helicar spring", 10)
const physicslab4 = new physicslab("Gravesand Apperatus", 8)
const physicslab5 = new physicslab("free fall method", 2)
const physicslab6 = new physicslab("glass slabs", 20)
const physicslab7 = new physicslab("glass prisms", 20)
const physicslab8 = new physicslab("bar magnets", 30)
console.log(physicslab1,physicslab2,physicslab3,physicslab4,physicslab5,physicslab6,physicslab7,physicslab8)

import { TeacherOfDay } from "./teacherday";


const TeacherOfDay1 = new TeacherOfDay("Sir Mazhar", "SST", "Monday", 10,true,false)
const TeacherOfDay2 = new TeacherOfDay("Sir Adeel", "SST", "Tuesday", 15,true,false)
const TeacherOfDay3 = new TeacherOfDay("Sir Yasir", "SST", "Wednesday",11 ,false,true)
const TeacherOfDay4 = new TeacherOfDay("Sir Kaleem", "SST", "Thursday", 8,true,false)
let a = TeacherOfDay1, b = TeacherOfDay2, c = TeacherOfDay3, d = TeacherOfDay4
console.log(a,b,c,d)

