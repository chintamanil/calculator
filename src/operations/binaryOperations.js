(function() {

    function binaryAnd(a, b) {
        return Number(a) & Number(b);
    }

    function binaryOr(a, b) {
        return Number(a) | Number(b);
    }

    function binaryXor(a, b) {
        return Number(a) ^ Number(b);
    }

    function binaryNot(a) {
        return !Number(a);
    }

    module.exports = {
        binaryAnd: binaryAnd,
        binaryOr: binaryOr,
        binaryXor: binaryXor,
        binaryNot: binaryNot
    };


})()
