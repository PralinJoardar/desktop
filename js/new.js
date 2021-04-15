// const pravesh ={
//     firstName:'pravesh',
//     lastName:'rikhari',
//     fullName: function(){
//         console.log(this.firstName + " " + this.lastName)
//     }
    
// }
// const mohit = {
//     firstName:'mohit',
   
// }
// const kamal = {
//     lastName:'khan'
// }

// mohit.__proto__=pravesh;
// kamal.__proto__=mohit;

// pravesh.fullName();
// mohit.fullName();
// kamal.fullName();

//.....................


// function xyz(num) {
//     this.num = num;
// }
// xyz.prototype.getNum = function(){
//     return this.num;
// }

// let pralin = new xyz(35);
// // var a = pralin.getNum();
// console.log(pralin.getNum());

//......................    
   

function xyz(){
    this.num = 10;
    
}

xyz.prototype.getNum= function(){
   console.log('hii', this.num);
}



const a = new xyz();
 console.log(a.getNum());

 