
export class register{
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