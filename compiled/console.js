(function () {

    var prompt = require('prompt');
    var colors = require('colors/safe');
    var Evaluate = require('./module/evaluate.js');

    prompt.delimiter = colors.green('>');
    prompt.message = '';

    // Start the prompt
    prompt.start();
    let currentEvaluation = new Evaluate();
    function ask() {
        console.log('---------------------------------------------------------------------');
        console.log('Enter: "END" to exit');
        prompt.get(['w'], function (err, result) {
            if (result.w === 'END') {
                console.log('We are done.');
            } else {
                currentEvaluation.setOperations(result.w);
                let answer = currentEvaluation.solve();
                console.log(`Result of  ${ result.w } is = ${ answer }`);
                ask();
            }
        });
    }
    ask();
})();