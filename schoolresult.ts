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
