(function (){
    "use strict";
    function inArray(searchString, stringArray){
        for (let i = 0; i < stringArray.length; i++) {
            if (stringArray[i].includes(searchString)){
                return true;
            }
        };
        return false;
    }
    const array = [
        'good',
        'day',
        'to',
        'die',
    ]
    console.log(inArray('day', array));
})();