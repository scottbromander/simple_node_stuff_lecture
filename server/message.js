var kittyFooFoo = "wait for it";
var someNumber = 7;

var message = function(){
    return productNumber(someNumber, 2).toString();
};

var productNumber = function(x, y){
    return x*y;
};

module.exports = message;