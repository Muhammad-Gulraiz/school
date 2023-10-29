class physicslab{
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
const physicslab1 = new physicslab("vernier caliper", 10)
const physicslab2 = new physicslab("screw guage", 8)
const physicslab3 = new physicslab("helicar spring", 10)
const physicslab4 = new physicslab("Gravesand Apperatus", 8)
const physicslab5 = new physicslab("free fall method", 2)
const physicslab6 = new physicslab("glass slabs", 20)
const physicslab7 = new physicslab("glass prisms", 20)
const physicslab8 = new physicslab("bar magnets", 30)
console.log(physicslab1,physicslab2,physicslab3,physicslab4,physicslab5,physicslab6,physicslab7,physicslab8)