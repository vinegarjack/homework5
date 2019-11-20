(function (){
    "use strict";
    function sequance (start = 0, step = 1){
        return function(){
            return start +=step;
        }
    }

    let gen = sequance();
    function add(){
        let summ = 0;
        for (let i = 0; i < arguments.length; i++) {
            summ += arguments[i];
        }
        return summ;
    }
    function square(num){
        return num **2;
    }
    /* console.log(gen());
    console.log(gen()); */
    function fmap(fun1, fun2){
        const firstFun = fun1(), secondFun = fun2();
        return firstFun(secondFun());
    }
    console.log(fmap(add(1,2,3),square()));
})();