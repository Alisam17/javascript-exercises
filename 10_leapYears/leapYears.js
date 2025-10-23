const leapYears = function(year) {

    //leap year is as such
    // divisible by 4
    // divisible by 100 if they are also divisble by 400

    if ((year % 4 === 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
