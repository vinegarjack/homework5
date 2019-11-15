(function (){
    "use strict";
    function sequence(start = 0, step = 1){
        let startIn = start, stepIn = step;
        return function() {
            return startIn += stepIn; 
        };
    }
    let gen = sequence(3,4);
    function take (gener, num){
        const array =[];
        for(let i = 0; i < num ; i++){
            array.push(gener());
        }
        return array;
    }
    console.log(take(gen, 5));
})();