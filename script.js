(function (){
    const arr = [
        [1,2,3],
        [4,5],
        [6,7,8,9],
    ];
    function sumArrElem(array){
        let sum = 0;
        array.forEach(element => {
            element.forEach(innerElem => sum += innerElem);
        });
        return sum;
    }
    console.log(sumArrElem(arr));
})();