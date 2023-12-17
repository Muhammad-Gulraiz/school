export class user{
    name:string;
    age: number;
    fathername:string;
    id:string;
    password:number;
    constructor(name:string,age:number,fathername:string,id:string,password:number){
        this.name=name;
        this.age=age;
        this.fathername=fathername;
        this.id=id;
        this.password=password;
    }
    schooluser():string{
        return 'user name is ${this.name} and user age is ${this.age} and user fathername is ${this.fathername} and user id is ${this.id} and user password is ${this.password}'
    }

}
