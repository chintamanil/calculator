import { addition, substraction, division, multiplication } from './../operations/arithmaticOperations';
import {binaryAnd, binaryOr, binaryXor } from './../operations/binaryOperations';

// TODO use try catch here
/**
 * @return {[type]}        [description]
 */
function Evaluate(allOperations) {
    this.allOperations = allOperations.split('');
    this.order = [ '/*%' , '+-' , '&' , '^' , '|'];
}

/**
 * [solve description]
 */
Evaluate.prototype.solve = function() {

    let _operationsMap = {
        '+': addition,
        '-': substraction,
        '/': division,
        '*': multiplication
    };

    let results = null;

    var orderLength = this.order.length;
    for (let i = 0; i < orderLength; i++) {
        let currentOrder = this.order[i];
        for (let j = 0; j <= this.allOperations.length; j++) {
            let currentOperation = this.allOperations[j];
            if (currentOperation.indexOf(currentOrder) > -1) {
                // if operation is "!" we dont need below
                let previousNumber = this.allOperations[j - 1];
                let nextNumber = this.allOperations[j + 1];
                results += _operationsMap[currentOperation](previousNumber, nextNumber);
                this.allOperations.splice(j - 1, 3);

                // check this.allOperations length;
                j -= 2; // not 3
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
Evaluate.prototype.setOperations = function(allOperations) {
    this.allOperations = allOperations;
};

module.exports = Evaluate;
