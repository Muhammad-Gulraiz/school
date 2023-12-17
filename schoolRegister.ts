
export class register{
    name:string;
    page:number;
    items: number;
    incharge:string
    constructor(name:string,page:number,items:number,incharge:string){
        this.name=name,
        this.page=page,
        this.items=items,
        this.incharge=incharge
    }
    schoolregister(){
        return 'register name is ${this.name} and pages are ${this.page}'
    }
}
