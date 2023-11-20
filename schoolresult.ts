export class schoolresult{
    name:string;
    english:number;
    urdu:number;
    islamiat:number;
    pakstudy:number;
    maths:number;
    physics:number;
    chemistery:number;
    biology:number
    computer:number

    constructor(name:string,english:number,urdu:number,islamiat:number,pakstudy:number,maths:number,physics:number,chemistery:number,biology:number,computer:number){
        this.name=name
        this.english=english
        this.urdu=urdu
        this.islamiat=islamiat
        this.pakstudy=pakstudy
        this.maths=maths
        this.physics=physics
        this.chemistery=chemistery
        this.biology=biology
        this.computer=computer

    }
    students(){
        return 'result name is ${this.name}  and English is ${this.English}'
    }
    ArtsSubjects(){
        return 'schoolresult of Urdu is ${this.Urdu} and Islamiat is ${this.Islamiat} and Pak-study is ${this.Pak-study}'
    }
    ScienceSubjects(){
        return 'scienceresult is ${this.Maths} and Physics is ${this.Physics} and chemistery is ${this.Chemistery} and biology is ${this.Biology/Computer}'
    }
}
const schoolresult1 = new schoolresult("Saboor", 72, 73, 49, 47, 75, 64, 60, 45, 72)
const schoolresult2 = new schoolresult("Haseeb", 62, 50, 32, 34, 74, 71, 57, 61, 70)
const schoolresult3 = new schoolresult("Danial", 56, 63, 39, 41, 70, 54, 60, 55, 59)
const schoolresult4 = new schoolresult("Zubair", 42, 53, 42, 39, 65, 73, 58, 52, 60)

let u = schoolresult1, n = schoolresult2, p= schoolresult3, s= schoolresult4
console.log(u,n,p,s)