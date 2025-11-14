const palindromes = function (str) {
    const alphanumeric = str.replace(/[^a-zA-Z0-9]/g, '');
    let splitStr = alphanumeric.split('');
    splitStr.reverse();
    let sortedStr = splitStr.join('');
    if(alphanumeric.toLowerCase() == sortedStr.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};



// Do not edit below this line
module.exports = palindromes;
