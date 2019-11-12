(function (){
    const new3dArr =[
        [
            [1,2],
            [3,4],
        ],
        [
            [5,6],
            [7,8,9,10],
        ]
    ];
    function sumArrElem(array){
        let sum = 0;
        array.forEach(element => {
            element.forEach(innerElem => {
                innerElem.forEach(muchInnerElement => sum += muchInnerElement)});
        });
        return sum;
    }
    console.log(sumArrElem(new3dArr));
})();