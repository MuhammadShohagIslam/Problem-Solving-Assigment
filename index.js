// ----------- Problem Number 1 -------------- //
// Convert radian to digree
function radianToDegree(radian) {
    // check if it is radian value or not
    if (typeof radian !== "number") {
        return "Please Provide Valid Randian Number";
    }
    // convert radian to digree
    const convertRadianToDegree = radian * (180 / Math.PI);

    // number in two fixed-point notation.
    const twoFixPoint = convertRadianToDegree.toFixed(2);

    // return converted randian to degree value
    return parseFloat(twoFixPoint);
}
console.log(radianToDegree());

// ----------- Problem Number 2 -------------- //
// check whether the given file is a JavaScript file or not
function isJavaScriptFile(file) {
    // check if it is file or not
    if (typeof file !== "string") {
        return "Please Provide Correct File";
    }

    // checking if it is JavaScript file, if it is return true, otherwise return false
    if (file.endsWith(".js")) {
        return true;
    } else {
        return false;
    }
}

// ----------- Problem Number 3 -------------- //
// Calculate the total oil price that I have to pay
function oilPrice(dieselLiter, petrolLiter, octaneLiter) {
    // check if there are valid nummber or not
    if (
        typeof dieselLiter !== "number" ||
        typeof petrolLiter !== "number" ||
        typeof octaneLiter !== "number"
    ) {
        return "Please Provide Valid Unit of Volume Oil ";
    }

    // make a variable to store per diesel, petrol, octane price
    const perDieselPrice = 114;
    const perPetrolPrice = 130;
    const perOctanePrice = 135;

    // create a variable to store total oil price
    const totalOilPrice =
        perDieselPrice * dieselLiter +
        perPetrolPrice * petrolLiter +
        perOctanePrice * octaneLiter;

    // return final result of totalOilPrice
    return totalOilPrice;
}
console.log(oilPrice(1));

// ----------- Problem Number 4 -------------- //

// Calculate the total public Bus Fare that we have to pay
function publicBusFare(peoples) {
    // check given people parameter number or not
    if (typeof peoples !== "number") {
        return "Please Provide Valid Peoples Number";
    }

    // create a varibale to store qunatity of per bus and microBus capacity
    const perBusPeopleCapacity = 50;
    const perMicroBusPeopleCapacity = 11;

    // checking and caculating total public bus fare
    if (peoples % perBusPeopleCapacity < perMicroBusPeopleCapacity) {
        // calculate public bus fare price;
        return (peoples % perBusPeopleCapacity) * 250;
    } else {
        // store total peoples under micro bus service
        const totalPeopleUnderMicroBus = peoples % perBusPeopleCapacity;
        // calculate public bus fare price;
        const totalPublicFare =
            (totalPeopleUnderMicroBus % perMicroBusPeopleCapacity) * 250;
        return totalPublicFare;
    }
}
console.log(publicBusFare());

// ----------- Problem Number 5 -------------- //

// find the best friend from the objects
function isBestFriend(bestFriend1, bestFriend2) {
    // check given parameter object or not
    if (typeof bestFriend1 !== "object" || typeof bestFriend2 !== "object") {
        return "Please Provide Valid Object";
    }

    // checking there are best friend or not, if it is return ture, otherwise return false
    if (
        bestFriend1.name.toLowerCase() === bestFriend2.friend.toLowerCase() &&
        bestFriend1.friend.toLowerCase() === bestFriend2.name.toLowerCase()
    ) {
        return true;
    } else {
        return false;
    }
}
