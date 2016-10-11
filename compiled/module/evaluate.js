import { addition, substraction, division, multiplication } from './../operations/arithmaticOperations';
import { binaryAnd, binaryOr, binaryXor } from './../operations/binaryOperations';

// TODO use try catch here
/**
 * @return {[type]}        [description]
 */
function Evaluate() {
    this.allOperations = [];
    this.order = ['/*', '+-', '&', '^', '|'];
}

/**
 * [solve description]
 */
Evaluate.prototype.solve = function () {

    let _operationsMap = {
        '+': addition,
        '-': substraction,
        '/': division,
        '*': multiplication,
        '&': binaryAnd,
        '|': binaryOr,
        '^': binaryXor
    };

    let results = null;
    var orderLength = this.order.length;
    for (let i = 0; i < orderLength; i++) {
        let currentOrder = this.order[i];
        let allOperationsLength = this.allOperations.length;
        for (let currentOperatingIndex = 0; currentOperatingIndex < allOperationsLength; currentOperatingIndex++) {
            let currentOperation = this.allOperations[currentOperatingIndex];
            if (currentOperation.indexOf(currentOrder) > -1) {
                // if operation is "!" we dont need below & currentOperatingIndex is reduced by 1
                let nextNumber = this.allOperations.substr(currentOperatingIndex - 1, currentOperatingIndex);
                let previousNumber = this.allOperations.substr(currentOperatingIndex, currentOperatingIndex + 1);
                results += _operationsMap[currentOperation](previousNumber, nextNumber);
            }
        }
    }
    return results;
};

/**
 * [setOperations description]
 *
 * @param {[type]} allOperations [description]
 */
Evaluate.prototype.setOperations = function (allOperations) {
    let currentNumber = [];
    for (let i = 0; i < allOperations.length; i++) {
        let current = allOperations[i];
        if (typeof current !== 'number') {
            this.allOperations.join(currentNumber);
            this.allOperations.push(current);
            currentNumber = [];
        } else {
            currentNumber.push(current);
        }
    }
};

module.exports = Evaluate;