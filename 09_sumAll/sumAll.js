const sumAll = function(start, end) {

    let newStart = start;
    let newEnd = end;

    if ((newStart < 0) || (newEnd < 0)) {
        return "ERROR";
    }

    if (((!Number.isInteger(newStart)) || (!Number.isInteger(newEnd)))) {
        return "ERROR";
    }

    if (start > end) {
        newStart = end;
        newEnd = start;
    }
    let sum = 0;
    for (newStart; newStart <= newEnd; newStart++) {
        sum +=newStart;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
