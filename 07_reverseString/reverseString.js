const reverseString = function(str) {
    const arr = str.split('');
    const reversed = arr.reverse();
    const res = reversed.join('');
    return res;

};

// Do not edit below this line
module.exports = reverseString;
