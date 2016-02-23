function box(){
	   this.val = undefined;
	
		this.set=function(newVal) {val = newVal;},
		this.get=function(){ return val;},
		this.type=function(){return typeof val;}

	
}

var b =new box();
console.log(b);
console.log(b.type());//"undefined"
b.set(98.6);
console.log(b.get());//98.6
console.log(b.type()); //"number"    //why no val in object b??




console.log('---------');
function box(){
	var val = undefined;
	return {
		set: function(newVal) {val = newVal;},
		get: function(){ return val;},
		type: function(){return typeof val;}

	};
}
var b = box();    
console.log(b);
console.log(b.type());//"undefined"
b.set(98.6);
console.log(b.get());//98.6
console.log(b.type()); //"number"