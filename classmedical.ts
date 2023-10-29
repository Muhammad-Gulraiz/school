
class medical{
    name:string;
    age:number;
    qualification:string;
    id:string;
    service:string;
    adress: string

    constructor(n:string,a:number,q:string,i:string,s:string,b:string){
        this.name=n
        this.age=a
        this.qualification=q
        this.id=i
        this.service=s
        this.adress=b
    }
    medicalFunc():string{
        return 'medical name is ${this.name}, and his age is ${this.age}, and his qualification is ${this.qualification}, and his id is ${this.id}, and his service is ${this.service}, and his adress is ${this.adress}'
    }       
}

const medical1 = new medical("Qadoos",12,"MBBS","mountain","16years","jada jhelum")
const medical2 = new medical("AAsshir",13,"DHMS","house","19years","mehmoodabad jhelum")
const medical3 = new medical("Maqadas",100,"scientist","river","18years","daryala jhelum")

let medicaldata:medical[] = []
medicaldata.push(medical1)
medicaldata.push(medical2)
medicaldata.push(medical3)

medical3.name = "sundus"

console.log(medicaldata)