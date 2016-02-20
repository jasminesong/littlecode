var person = {
    firstname:"xiao",
    lastname:"shuang",
    greet:function(){
        console.log("hi"+this.firstname);
    }

};


var john = Object.create(person);
john.firstname = "john";
john.sex="male";
john.myCustomGreet = function(){
    console.log("hi"+this.firstname+","+this.lastname+","+this.sex);

};

function Person(){
    this.firstname='default';

}

Person.prototype.greet = function(){
    console.log("this is second greet"+this.firstname);
};

var jane = new Person();
jane.lastname = "shuang";
jane.greet();
jane.myCustomGreet=function(){
    console.log("this is custome"+this.lastname+','+this.firstname);  
    //this is customshuang,default
};


john.myCustomGreet();
john.greet();

jane.myCustomGreet();