var message = require('./message');

var goodbye = function(){
    return "Goodbye!";
};

var wait = function(){
    return message();
};



exports.kittyFooFoo = goodbye;
exports.wait = wait;