(function (){
    function getDivisors(number){
        const divisors = [];
        for (let i = 1; i <= number; i++) {
            if (number%i===0){
                divisors.push(i);
            }
        }
        return divisors;
    }
    console.log(getDivisors(99));
})();