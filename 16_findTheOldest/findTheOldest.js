function getAge(people) {
    const currentYear = new Date().getFullYear();
    if (people.yearOfDeath == undefined) {
        return (currentYear - people.yearOfBirth)
    } else {
        return people.yearOfDeath - people.yearOfBirth;
    }
}

const findTheOldest = function (people) {

    if (people.size < 2) {
        return people[0];
    } else if (people.size == 0) {
        return [""];
    }
    let arr = people.reduce((oldest, currentPerson) => {
        let currAge = getAge(currentPerson);
        let oldestAge = getAge(oldest);
        if (currAge > oldestAge) {
            return currentPerson;
        } else {
            return oldest;
        }

        
    }, people[0])

    return arr;
};

// Do not edit below this line
module.exports = findTheOldest;
