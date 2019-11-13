(function (){
    function someNumCheck(num){
        if (num >= 10){
            return num**2;
        }else if (num < 7){
            return 'Number lower than 7';
        }else if(num === 8){
            return 7;
        }else if (num=== 9){
            return 8;
        }
    }
    console.log(someNumCheck(parseInt(prompt('enter number',''))));
})();