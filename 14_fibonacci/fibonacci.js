const fibonacci = function(number) {
    let num = Number(number);
    if (num < 0) {
        return "OOPS";
    }
    
    switch(num) {
        case 0: 
            return 0;
        case 1:
            return 1;
        default: {
            return fibonacci(num - 1) + fibonacci(num - 2);
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
