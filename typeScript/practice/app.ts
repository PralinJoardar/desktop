function myFun (num1:number, num2:number):any {
    let total:number = num1 + num2
    return total
}

let display: (num1:any,num2:any)=>string = myFun;
// display = myFun
// console.log(display(20,30));

const data :{name:string, age:number} = {
    name:"person",
    age:20
}

data.age = 30;
console.log(data.age);
