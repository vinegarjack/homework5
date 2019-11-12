(function (){
    function isNumberInRange(num){
        if (num > 0 && num <10){
            return true;
        }else {
            return false;
        }
    }

    console.log(isNumberInRange(1));
    console.log(isNumberInRange(10));
})();