class Library{
    incharge:string;
    name:string;
    bookIssue:boolean;
    RecievingDate:number;
    demage:boolean
    constructor(incharge:string,name:string,bookIssue:boolean,RecievingDate:number,demage:boolean){
        this.incharge=incharge
        this.name=name
        this.bookIssue=bookIssue
        this.RecievingDate=RecievingDate        
        this.demage=demage
    }
    PoeteryBook(){
        return 'library incharge is ${this.incharge}'
    }
    HistoryBook(){
        return 'student name is ${this.name}'
    }
    adventureBook(){
        return 'book issue date is ${this.bookIssue} and recieving date is ${this.recieving} and is it safe ${this.damage}'
    }
}
const Library1 = new Library("shafiq bhatti","zain", true, 12, false)
const Library2 = new Library("shafiq bhatti","Tahir", true, 22, false)
const Library3 = new Library("shafiq bhatti","Aftab", true, 2, true)
const Library4 = new Library("shafiq bhatti","Nadeem", true, 18, false)

console.log(Library1,Library2,Library3,Library4)