
// class schoolresult{
//     name:string;
//     English:number;
//     Urdu:number;
//     Islamiat:number;
//     Pakstudy:number;
//     Maths:number;
//     Physics:number;
//     Chemistery:number;
//     BiologyComputer:number

//     constructor(name:string,English:number,Urdu:number,Islamiat:number,Pakstudy:number,Maths:number,Physics:number,Chemistery:number,BiologyComputer:number){
//         this.name=name
//         this.English=English
//         this.Urdu=Urdu
//         this.Islamiat=Islamiat
//         this.Pakstudy=Pakstudy
//         this.Maths=Maths
//         this.Physics=Physics
//         this.Chemistery=Chemistery
//         this.BiologyComputer=BiologyComputer

//     }
//     students(){
//         return 'result name is ${this.name}  and English is ${this.English}'
//     }
//     ArtsSubjects(){
//         return 'schoolresult of Urdu is ${this.Urdu} and Islamiat is ${this.Islamiat} and Pak-study is ${this.Pak-study}'
//     }
//     ScienceSubjects(){
//         return 'scienceresult is ${this.Maths} and Physics is ${this.Physics} and chemistery is ${this.Chemistery} and biology is ${this.Biology/Computer}'
//     }
// }
// const schoolresult1 = new schoolresult("Saboor", 72, 73, 49, 47, 75, 64, 60, 45)
// const schoolresult2 = new schoolresult("Haseeb", 62, 50, 32, 34, 74, 71, 57, 61)
// const schoolresult3 = new schoolresult("Danial", 56, 63, 39, 41, 70, 54, 60, 55)
// const schoolresult4 = new schoolresult("Zubair", 42, 53, 42, 39, 65, 73, 58, 60)

// let x = schoolresult1, y = schoolresult2, z= schoolresult3, s= schoolresult4
// console.log(x,y,z,s)

// ==============================================================================================

// class characterFile{
//     name:string;
//     attendence:number;
//     absents:number;
//     grade:string;
//     punishment:boolean;
//     fine:boolean
//     constructor(name:string,attendence:number,absents:number,grade:string,punishment:boolean,fine:boolean){
//         this.name=name
//         this.attendence=attendence
//         this.absents=absents
//         this.grade=grade
//         this.punishment=punishment
//         this.fine=fine
//     }
//     certificate(){
//         return 'character of ${this.name}'
//     }
//     character(){
//         return 'his attendence is ${this.attendence} and his grade is ${this.grade}'
//     }
//     default(){
//         return 'punishment is ${this.punishment} and fine is ${this.fine}'
//     }
// }

// const characterFile1 = new characterFile("Hasnat", 75,25,"A", false,false )
// const characterFile2 = new characterFile("Sundus", 55,45,"C", true,true )
// const characterFile3 = new characterFile("Waqas", 65,35,"B", true,false )
// const characterFile4 = new characterFile("Naeem", 98,2,"A^+", false,false )

// let x = characterFile1, y = characterFile2, z = characterFile3, m = characterFile4
// console.log(x,y,z,m)

// ============================================================================================================

// class lessonPlan{
//     name:string;
//     subject:string;
//     chapter:number;
//     topic:string
//     monday:string;
//     tuesdeay:string;
//     wednesday:string;
//     thursday:string;
//     friday:string
//     constructor(name:string,subject:string,chapter:number,topic:string,monday:string,tuesday:string,wednesday:string,thursday:string,friday:string){
//         this.name=name
//         this.subject=subject
//         this.chapter=chapter
//         this.topic=topic
//         this.monday=monday
//         this.tuesdeay=tuesday
//         this.wednesday=wednesday
//         this.thursday=thursday
//         this.friday=friday
//     }
//     oddRollnumber(){
//         return 'lesson name is ${this.name}'
//     }
//     evenRollnumber(){
//         return 'subject is ${this.subject} and chapter is ${this.chapter} and topic is ${this.topic}'
//     }
//     lessonDays(){
//         return 'on monday is ${this.monday} and on tuesday is ${this.tuesday} and on wednesday is ${this.wednesday} and on thursday is ${this.thursday} and on friday is ${this.friday}'
//     }
// }
// const lessonPlan1 = new lessonPlan("SirHaroon","Physics",12,"force of gravity","lecture","practice","test","result","practicle")
// const lessonPlan2 = new lessonPlan("SirNaseem","Biology",10,"circulatory system","lecture","practice","test","result","practicle")
// const lessonPlan3 = new lessonPlan("SirAqib","Chemistery",2,"scheilding effect","lecture","practice","test","result","practicle")
// const lessonPlan4 = new lessonPlan("SirTariq","Maths",5,"partial fractions","lecture","practice","test","result","practicle")

// let x = lessonPlan1, y = lessonPlan2, z = lessonPlan3, s = lessonPlan4
// console.log(x,y,z,s)

// ===========================================================================================================================================

// class Roznamcha{
//     name:string;
//     total:number
//     present:number;
//     leave:number;
//     absent:number
//     constructor(name:string,total:number,present:number,leave:number,absent:number){
//         this.name=name
//         this.total=total
//         this.present=present
//         this.leave=leave
//         this.absent=absent
//     }
//     QuaidBlock(){
//         return 'Roznamcha name is ${this.name}'
//     }
//     AhmerBlock(){
//         return 'total strength is ${this.total} and presents are ${this.present}'
//     }
//     LiaqatBagh(){
//         return 'on leave are ${this.leave}and on absent are ${this.absent}'
//     }    
// }
// const Roznamcha1 = new Roznamcha("class seven",55,45,3,7)
// const Roznamcha2 = new Roznamcha("class eight",50,46,3,1)
// const Roznamcha3 = new Roznamcha("class nine",65,52,3,10)
// const Roznamcha4 = new Roznamcha("class ten",42,35,3,4)
// let x = Roznamcha1, y = Roznamcha2, z = Roznamcha3, t= Roznamcha4
// console.log(x,y,z,t)

// ===================================================================================================================

// class DayOfTeacher{
//     name:string;
//     designation:string;
//     day:string;
//     complain:number;
//     fine:boolean;
//     forgiveness:boolean
//     constructor(name:string,designation:string,day:string,complain:number,fine:boolean,forgiveness:boolean){
//         this.name=name
//         this.designation=designation
//         this.day=day
//         this.complain=complain
//         this.fine=fine
//         this.forgiveness=forgiveness
//     }
//     Assembli(){
//         return 'Teacher name is ${this.name} and his designation is ${this.designation}'
//     }
//     Midtime(){
//         return 'day is ${this.day} and complain are ${this.complain} and fines are ${this.fine}'
//     }
//     finalTime(){
//         return 'forgiveness are ${this.forgiveness}'
//     }
// }
// const DayOfTeacher1 = new DayOfTeacher("Sir Mazhar", "SST", "Monday", 10,true,false)
// const DayOfTeacher2 = new DayOfTeacher("Sir Adeel", "SST", "Tuesday", 15,true,false)
// const DayOfTeacher3 = new DayOfTeacher("Sir Yasir", "SST", "Wednesday",11 ,false,true)
// const DayOfTeacher4 = new DayOfTeacher("Sir Kaleem", "SST", "Thursday", 8,true,false)
// let a = DayOfTeacher1, b = DayOfTeacher2, c = DayOfTeacher3, d = DayOfTeacher4
// console.log(a,b,c,d)

// ==================================================================================================================================================

// class Tournament{
//     name:string;
//     fatherName:string;
//     age:number;
//     result:string
//     awards:string
//     constructor(name:string,fatherName:string,age:number,result:string,awards:string){
//         this.name=name
//         this.fatherName=fatherName
//         this.age=age
//         this.result=result
//         this.awards=awards        
//     }
//     cricket(){
//         return 'name of student is ${this.name} and his age is ${this.age}'
//     }
//     baketball(){
//         return 'result of games is ${this.result}'
//     }
//     badminton(){
//         return 'awards are ${this.awards}'
//     }

// }
// const Tournament1 = new Tournament("Aashir","Afzal kyani",18,"winner","Gold medal")
// const Tournament2 = new Tournament("Ahtezaz","Ahsan Danish",16,"winner","silver medal")
// const Tournament3 = new Tournament("Asad Safeer","Asim Akram",20,"defeated","nill")
// const Tournament4 = new Tournament("Hameed","Tahir",21,"winner","Trophy")


// console.log(Tournament1,Tournament2,Tournament3,Tournament4)

// ===================================================================================================================================


// class Library{
//     incharge:string;
//     name:string;
//     bookIssue:boolean;
//     RecievingDate:number;
//     demage:boolean
//     constructor(incharge:string,name:string,bookIssue:boolean,RecievingDate:number,demage:boolean){
//         this.incharge=incharge
//         this.name=name
//         this.bookIssue=bookIssue
//         this.RecievingDate=RecievingDate        
//         this.demage=demage
//     }
//     PoeteryBook(){
//         return 'library incharge is ${this.incharge}'
//     }
//     HistoryBook(){
//         return 'student name is ${this.name}'
//     }
//     adventureBook(){
//         return 'book issue date is ${this.bookIssue} and recieving date is ${this.recieving} and is it safe ${this.damage}'
//     }
// }
// const Library1 = new Library("shafiq bhatti","zain", true, 12, false)
// const Library2 = new Library("shafiq bhatti","Tahir", true, 22, false)
// const Library3 = new Library("shafiq bhatti","Aftab", true, 2, true)
// const Library4 = new Library("shafiq bhatti","Nadeem", true, 18, false)

// console.log(Library1,Library2,Library3,Library4)






















































