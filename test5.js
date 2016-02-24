function Foo(){
	getName = function(){ alert(1);};
	return this;
}   //定义了一个叫Foo的函数
 
Foo.getName = function(){ alert(2);}; //为Foo创建了一个叫getName的静态属性
Foo.prototype.getName = function(){alert(3);};  //为Foo的原型对象新创建了一个叫getName的匿名函数
var getName = function(){alert(4);};; //变量表达式
function getName(){alert(5);}    //函数声明

//请写出以下输出结果
Foo.getName(); //2
getName(); //4
Foo().getName(); //1
getName(); //1     ---window的getName
new Foo.getName();//2   ---Foo这个函数作为对象看时的getName
new Foo().getName(); //3 ---Foo构造出的实例对象想要访问getName
new new Foo().getName(); //3

//总之，一定要弄清楚，访问的是谁的函数，谁的属性，函数调用没，函数返回什么;函数是执行调用的，还是当构造函数调用的；