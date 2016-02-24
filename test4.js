// this code is to testify which is the "member"of object constructed by constructor function

function Person(){
    var name1 = "ham";
    this.name2 = "john";
     greet1 = function(){
        console.log("hello1");
     }

     var greet2 = function(){
        console.log("hello2");
        };

      this.greet3=function(){
        console.log("hello3");
      };
}

var person1 = new Person();

console.log(person1);// output shows only greet3 and name2 are member of person1 object

var person2 = Person();
console.log(person2);     //undefined

//Person().greet2();  //error:cannot read greet2 of undefined
Person.greet2();   //error:Person.greet2 is not a function