let a = 10;

function parent(){
    function child(){
        a=20;
        console.log(a);
    }
    child();
    console.log(a);

}
console.log(a)
parent();
