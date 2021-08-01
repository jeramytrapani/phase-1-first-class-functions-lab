const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
   // return drivers.splice(drivers.length - 2)
    return drivers.slice(drivers.length - 2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fairMultiplier){
    return function (fare){
        return fare * fairMultiplier; 
    }; 
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
     return arrayOfDrivers(returnLastTwoDrivers)
}
