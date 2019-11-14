(function (){
    "use strict";
    function square (x){ 
        return x*x;
    }
    function map( fn , array){
        const inArr = [];
        array.forEach(element => {
            inArr.push( fn (element));
        });
        return inArr;
    }
    const anyArr = map(square,[1,2,3]);
    console.log(anyArr);
})();