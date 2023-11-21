export class Roznamcha{
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