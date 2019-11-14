(function (){
    "use strict";
    function someUpperCase(string){
        const stringArr = string.split('_');
        let resString = stringArr[0];
        for (let i = 1; i < stringArr.length; i++) {
            resString += stringArr[i][0].toUpperCase() + stringArr[i].slice(1);
        };
        return resString;
    }
    const someString = 'var_text_hello';
    console.log(someUpperCase(someString));
})();