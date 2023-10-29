class jada{
    name:string;
    age:number

    constructor(n:string,a:number){
        this.name=n
        this.age=a
    }
    jadaFunc():string{
        return 'jada name is ${this.name}, his age is ${this.age}'

    }
}
const jada1 = new jada("Bushra",12)
const jada2 = new jada("imran khan",25)
const jada3 = new jada("sweet",88 )

console.log(jada1,jada2,jada3)