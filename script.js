(function (){
    "use strict";
    function sequance (start = 0, step = 1){
        return function(){
            return start +=step;
        }
    }
    let gen = sequance();
    /* console.log(gen());
    console.log(gen()); */
    function fmap(fun1, fun2){
        
    }
})();