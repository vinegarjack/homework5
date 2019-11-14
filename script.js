(function (){
    "use strict";
    function filter(fnc, array){
        const innerArr = [];
        array.forEach(element => {
            if (fnc(element)){
                innerArr.push(element);
            }
        });
        return innerArr;
    }
    function isOdd(num){
        if (num % 2 === 0 ){
            return false;
        }else{
            return true;
        }
    }
    const someArr = [1,2,3,4,56]
    console.log(filter(isOdd, someArr));
})();