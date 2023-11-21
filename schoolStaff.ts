export class Staff{
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
const staff1 = new Staff("Ishtiaq-headmaster",52,"M.A,M.ed","iceland","31years","near:islamia school")
const staff2 = new Staff("jabran-sst",39,"M.phil,M.ed","house","12years","kalagujran jhelum")
const staff3 = new Staff("Haroon-est",40,"mcs,b.ed","water","18years","daryala jhelum")

// let x:staff[] = []

// x.push(staff1)
// x.push(staff2)
// x.push(staff3)
// console.log(x)
console.log(staff1,staff2,staff3)