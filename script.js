(function (){
    function arrSize(array){
        if (array === undefined){
            console.log('error: no arguments');
            return;
        }else{
            let size = 0;
            array.forEach(element => size++);
            return size;}
        }
    const arr = [1,3,5,6,8,23];
    console.log(arrSize(arr));
    console.log(arrSize([]));
    arrSize();
})();