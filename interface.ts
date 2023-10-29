interface faisal{
    fname:string;
    age:number
    func:()=> void;
    hobbies:string[];
    socialMedia:{
        instagram:string;
        facebook:string
    }
}
let obj = {
    fname : "Ali", 
    age:31,
    func:()=>{
        console.log("hello")
    },
    hobbies:["cricket", "hockey"],
    socialMedia:{
        intagram:"jell",
        facebook:"@gmail.com"
    }
}
console.log(obj)