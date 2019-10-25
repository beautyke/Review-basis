// 闭包的概念：
//    当一个函数执行时能够记住和访问到它定义时所在的作用域时，就产生了闭包。无论这个函数在哪里执行，包裹这个函数的外部函数名代指为闭包。（谷歌来说）

// 1、修改下列代码，让循环输出结果依次为：1，2，3，4，5
for (var i=1; i<=5; i++){
    setTimeout(function timer(){
        console.log(i);
    },i*1000);
}

// 解法 1：
for (var i=1; i<=5; i++) {

    (function(i){
        setTimeout(function timer(){
            console.log(i);
        },i*1000);
    })(i) 

}

// 解法 2：
for (var i=1; i<=5; i++) {
        setTimeout(
           ( function(i){
             return function timer(){
                console.log(i);
             }
            })(i),i*1000)
}

// 2、

var  data = [];

for (var i = 0; i < 3; i++){
    data[i] = function () {
        console.log(i);
    };

}

data[0]();
data[1]();
data[2]();

// 答案：
 
var  data = [];

for (var i = 0; i < 3; i++){
    (function(i){
        data[i] = function () {
            console.log(i);
        };
    })(i)

}

data[0]();
data[1]();
data[2]();