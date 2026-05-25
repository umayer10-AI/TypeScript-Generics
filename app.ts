// const a = (v: string) =>{
//     a.
// }

// a("Umayer")
// a(12)
// a(true)


// const a = <T> (v: T) => {
//     console.log(v)
// }
// a<string>("Umayer")
// a<number>(12)
// a(true)

const a = <T> (v:T, x:string, y:number) => {
    console.log(v,x,y)
}
a<string>("Umayer","Boss",200)