export class rooms{
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
