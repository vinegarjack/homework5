(function (){
    "use strict";
    function sequence(start = 0, step = 1){
        let startIn = start, stepIn = step;
        return function() {
            return startIn += stepIn; 
        };
    }
    let gen = sequence(3,4);
    console.log(gen());
    console.log(gen());
    console.log(gen());
})();