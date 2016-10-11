(function() {

    function addition(a, b) {
        return Number(a) + Number(b);
    }

    function substraction(a, b) {
        return Number(a) - Number(b);
    }

    function multiplication(a, b) {
        return Number(a) * Number(b);
    }

    function division(a, b) {
        return Number(a) / Number(b);
    }

    module.exports = {
        addition: addition,
        substraction: substraction,
        multiplication: multiplication,
        division: division
    };

})();
