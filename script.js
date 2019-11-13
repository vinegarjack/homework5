(function (){
    function isEven(num){
        if (num%2===0){
            return true;
        }else{
            return false;
        }
    };
    const array = [1,2,3,4,5,6,7,9,10];
    const evenArray = array.filter(element => isEven(element));
    console.log(array, evenArray);
})();