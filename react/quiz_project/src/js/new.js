const pravesh ={
    firstName:'pravesh',
    lastName:'rikhari',
    fullName: function(){
        console.log(this.firstName + " " + this.lastName)
    }
    // proto{
    //     firstName:'pravesh',
    //     lastName:'rikhari',
    //     fullName: function(){
    //     console.log(this.firstName + " " + this.lastName)
    //     }
    // }
    
}
const mohit = {
    firstName:'mohit',
    // proto{
    //     firstName:'mohit',
    // }
}

mohit.__proto__=pravesh;

pravesh.fullName();
mohit.fullName();
