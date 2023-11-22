export class physicslab{
    name:string;
    qty:number
    constructor(name:string,qty:number){
        this.name=name,
        this.qty=qty
    }
    schoollab(){
        return 'name of apperatus is ${this.name} and it quantity is ${this.qty}'
    }
}
