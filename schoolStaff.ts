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
