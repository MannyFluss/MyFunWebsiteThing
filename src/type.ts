//ts will implicitly try and convert stuff
let id : number = 5;

let s = 5;

//s = "" error

//typescript will get turned into js code, thats something we need to manually do i think
let numberArray : number[] = [1,2,3,4,5];

let fuck : any[] //any array
let typle : [boolean, number] = [false ,1 ];

let union : string | number = "s"
let union2 : string | number = 1
enum directions{
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
enum directionsString{
    UP = "up",
    DOWN = "down",
    LEFT ="left",
    RIGHT="right",
}
//defining objects

type User = {
    id: number
    name : string
}

const conner : User = {
    id: 0,
    name : "conner",
}
let cid:any = 1
//will force to check, idk how useful this is
//probably mainly for unions
let fuck2:number = cid as number

function addNum(x:number,y:number): number{
    //return "s"error
    return x+y
}

interface GuyInterface{
    id : number, //this is private
    name: string,
    catchphrase? : string //this is optionally defined
}

interface GuyFunc{
    (guy1 : GuyInterface, guy2 : GuyInterface) : GuyInterface
}

class Dude implements GuyInterface
{
    id : number
    name: string

    constructor(id:number,name:string){
        this.id = id
        this.name = name
    }
    register()
    {
        return `this{this.name} registered`
    }
}
const conner2 = new Dude(123,"swag")

//conner2.id this is private