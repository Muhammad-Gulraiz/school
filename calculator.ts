class Calculator{       
    answer: number = 0;    
      
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
    cos(n:number):number{
        return this.answer = Math.cos(n)
    }
    acos(n:number):number{
        return this.answer = Math.acos(n)
    }
    sin(n:number):number{
        return this.answer = Math.sin(n)
    }
    tan(n:number):number{
        return this.answer = Math.tan(n)
    }
}
const calculator1 = new Calculator();
calculator1.sqrt(9)
console.log(calculator1)