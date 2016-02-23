//this is for "why do we have to use IIFE instead of function statement and then invoke it?"

function wrapElements(a){
    var result = [],i,n;
    for(i = 0,n=a.length;i<n;i++){

      (function(){
        var j = i;
        result[i] = function(){ return a[j];};
      })();
       

    }

    return result;
}

var wrapped = wrapElements([10,20,30,40,50]);
var f = wrapped[0];

console.log(f());

console.log('----------------');

function wrapElements(a){
    var result = [],i,n;
    for(i = 0,n=a.length;i<n;i++){

      function innerFunction(){
        var j = i;
        result[i] = function(){ return a[j];};
      };
       
        innerFunction();

    }

    return result;
}

var wrapped = wrapElements([10,20,30,40,50]);
var f = wrapped[0];

console.log(f());   //10;which means the second way of writing the function and then invoke                       //it,also works.


//below is the not working code. 
console.log('=========');
function wrapElements(a){
    var result = [],i,n;
    for(i = 0,n=a.length;i<n;i++){
      result[i] = function(){ return a[i]; };   //just wrap this sentence with function is not                              // adequate. Still needs to invoke it to finish the assginment.
    }

    return result;
}

var wrapped = wrapElements([10,20,30,40,50]);
var f = wrapped[0];
f();    //undefined