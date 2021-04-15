function myFun(num1, num2) {
    var total = num1 + num2;
    return total;
}
var display = myFun;
// display = myFun
// console.log(display(20,30));
var data = {
    name: "person",
    age: 20
};
data.age = 30;
console.log(data.age);
