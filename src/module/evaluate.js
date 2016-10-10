import { addition, substraction, division, multiplication } from './../operations/arithmaticOperations';
import {binaryAnd, binaryOr, binaryXor } from './../operations/binaryOperations';

// TODO use try catch here
/**
 * @return {[type]}        [description]
 */
function Evaluate(allOperations) {
    this.allOperations = allOperations.split('');
    this.order = ['!' , '/*%' , '+-' , '&' , '^' , '|'];
    this.result = null;
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
    var orderLength = this.order.length;
    for (let i = 0; i < orderLength; i++) {
        var currentOrder = this.order[i];
        for (let j = 0; j <= this.allOperations.length; j++) {
            var currentOperation = this.allOperations[j];
            if (currentOperation.indexOf(currentOrder) > -1) {
                let previousNumber = this.allOperations[j - 1];
                let nextNumber = this.allOperations[j + 1];
                this.result += _operationsMap[currentOperation](previousNumber, nextNumber);
                this.allOperations.splice(j - 1, 3);
                j -= 2; // not 3
            }
        }
    }
    return this.results;
};

Evaluate.prototype.setOperations = function(allOperations) {
    this.allOperations = allOperations;
};

module.exports = Evaluate;
