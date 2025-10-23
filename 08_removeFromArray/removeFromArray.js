const removeFromArray = function(arr, ...args)  {
    // find the index of the specified value and remove it with splice
    return arr.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
