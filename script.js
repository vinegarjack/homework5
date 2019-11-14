(function (){
    "use strict";
    function change (array){
        for (let i = 0; i < array.length; i+=2) {
            [array[i], array[i+1]] = [array[i+1],array[i]]; 
        };
        return array;
    }
    const someArray = [1,2,3,4,5,6];
    console.log(change(someArray));
})();