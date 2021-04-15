let name = {
    firstname:"Pralin",
    lastname:"Joardar",
}

printfullname = function(city,state){
    console.log(this.firstname + " " + this.lastname + " " + city + " " +state)
}

let name2 = {
    firstname:"Sachin",
    lastname:"Tendulkar"
}

printfullname.call(name,"Siliguri","WB");
printfullname.call(name2,"Mumbai","Maharastra")
printfullname.apply(name2,["Mum","Maha"])