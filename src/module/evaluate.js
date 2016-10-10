
import {addition, substraction, division, multiplication } from './../operations/arithmaticOperations';
// import {addition, substraction, division, multiplication } from './../operations/binaryOperations';

// TODO use try catch here

/**
 * @return {[type]}        [description]
 */
 function Evaluate(allOperations){
    this.allOperations = allOperations.split('');
    this.order = ['/*' , '+-'];
    this.result = null;

    this._operationsMap = {
    '+': addition,
    '-': substraction,
    '/': division,
    '*': multiplication
    };
}

Evaluate.prototype.solve = function() {
    let orderLength = this.order.length;
    for (let i = 0; i < orderLength; i++) {
        let currentOrder = this.order[i];
        for( let j = 0; j<= this.allOperations.length; j++){
            let currentOperation = this.allOperations[j];
            if(currentOperation.indexOf(currentOrder) > -1){
                let previousNumber = this.allOperations[j - 1];
                let nextNumber = this.allOperations[j + 1];
                this.result += this._operationsMap[currentOperation](previousNumber, nextNumber);
                this.allOperations.splice(j-1, 3);
                j -= 2; // not 3
            }
        }
    }

};
    module.exports = Evaluate;

