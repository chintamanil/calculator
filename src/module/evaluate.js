var arithmaticOperations = require('./../operations/arithmaticOperations.js');
var binaryOperations = require('./../operations/binaryOperations.js');

// TODO use try catch here
/**
 * @return {[type]}        [description]
 */
class Evaluate {
    constructor() {
        this.allOperations = [];
        this.order = ['!', '/*', '+-', '&', '^', '|'];
    }

    solve() {

        let _operationsMap = {
            '+': arithmaticOperations.addition,
            '-': arithmaticOperations.substraction,
            '/': arithmaticOperations.division,
            '*': arithmaticOperations.multiplication,
            '&': binaryOperations.binaryAnd,
            '|': binaryOperations.binaryOr,
            '^': binaryOperations.binaryXor,
            '!': binaryOperations.binaryNot
        };

        var results = false;
        var orderLength = this.order.length;
        for (let i = 0; i < orderLength; i++) {
            let currentOrder = this.order[i];
            let allOperationsLength = this.allOperations.length;
            for (let currentOperatingIndex = 0; currentOperatingIndex < this.allOperations.length - 1; currentOperatingIndex++) {
                let currentOperation = this.allOperations[currentOperatingIndex];
                // console.log(currentOperation, currentOperation.indexOf(currentOrder), currentOrder)
                if (currentOrder.indexOf(currentOperation) > -1) {
                    // if operation is "!" we dont need below & currentOperatingIndex is reduced by 1
                    if (currentOrder === '!') {
                        results += _operationsMap[currentOperation](this.allOperations[currentOperatingIndex + 1]);
                    } else {
                        let nextNumber = this.allOperations[currentOperatingIndex + 1];
                        let previousNumber = this.allOperations[currentOperatingIndex - 1];
                        let currentResult = _operationsMap[currentOperation](previousNumber, nextNumber);
                        this.allOperations.splice(currentOperatingIndex - 1, 3, currentResult);
                        currentOperatingIndex -= 2;
                        console.log(this.allOperations, 'all');
                    }
                }
            }
        }
        return this.allOperations[0];
    };

    setOperations(allOperations) {
        var currentNumber = [];
        this.allOperations = [];
        for (let i = 0; i < allOperations.length; i++) {
            let current = allOperations[i];
            if (isNaN(Number(current))) {
                if (currentNumber.length) {
                    this.allOperations.push(currentNumber.join(''));
                }
                this.allOperations.push(current);
                currentNumber = [];
            } else {
                currentNumber.push(current);
            }
        }
        this.allOperations.push(currentNumber.join(''));
        //    console.log(this.allOperations)
        currentNumber = [];
    };

}

module.exports = Evaluate;
