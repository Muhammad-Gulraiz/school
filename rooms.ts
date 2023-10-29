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