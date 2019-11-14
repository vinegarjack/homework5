(function (){
    function ucfirst(string){
        let argString = string.trim(), resString='';
        resString = string[0].toUpperCase();
        for (let i = 1; i < argString.length; i++) {
            if (argString[i] !== ' '){
                resString += argString[i];
            }else{
                resString += ' ' + argString[++i].toUpperCase();
            }
        }
        return resString;
    }
    let someString = 'abra kadabra boom';
    console.log(ucfirst(someString));
})();