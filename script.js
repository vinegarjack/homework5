(function (){
    function yourAge(age){
        let message ='';
        if (age >16){
            message = 'Welcome';
        }else{
            message = 'Too young';
        };
        return message;
    }
    console.log(yourAge(parseInt(prompt('Enter your age',''))));
})();