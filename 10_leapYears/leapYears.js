const leapYears = function (year) {

    //leap year is as such
    // divisible by 4
    // divisible by 100 if they are also divisble by 400

    //1900 and 700 are failing.


    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }

};


// Do not edit below this line
module.exports = leapYears;


// leap years are years divisible by 4
// years divisble by 100 are not leap years unless they are divisible by 400 as well

// by 4 is the main check. 
// secondary check is divide by 100
// third check is divide by 400