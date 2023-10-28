class calculator{
       
    n1 : number;
    n : number;
    n2 : number
    answer: number = 0;
    constructor(n1:number,n:number, n2:number, answer:number){
       
        this.n1 = n1
        this.n=n
        this.n2 = n2 
        this.answer = answer 

    }             
           
    add(n1:number,n2:number):number{
        return this.answer = n1 +n2
    }
    sub(n1:number,n2:number):number{
        return this.answer = n1 - n2
    }
    mul(n1:number,n2:number):number{
        return this.answer = n1 * n2
    }
    div(n1:number,n2:number):number{
        return this.answer = n1 / n2
    }
    pow(n1:number,n2:number):number{
        return this.answer = Math.pow(n1,n2)
    }
    log10(n:number):number{
        return this.answer= Math.log10(n)
    }
    sqrt(n:number):number{
        return this.answer = Math.sqrt(n)
    }
    sin(n:number):number{
        return this.answer = Math.sin(n)
    }
    asin(n:number):number{
        return this.answer = Math.asin(n)
    }
    cos(n:number):number{
        return this.answer = Math.cos(n)
    }
    acos(n:number):number{
        return this.answer = Math.acos(n)
    }        
    tan(n:number):number{
        return this.answer = Math.tan(n)
    }
    atan(n:number):number{
        return this.answer = Math. atan(n)
    }
}
const calculator1 = new calculator(0,0,0,0);
calculator1.pow(2,3)
console.log(calculator1)