(function (){
    function yourAge(age){
        while (age === undefined || isNaN(age)){
            age = parseInt(prompt('enter your age',''));
        }
        //console.log(age);
        let message ='';
        if (age >16){
            message = 'Welcome';
        }else{
            message = 'Too young';
        };
        return message;
    };
    console.log(yourAge());
})();