// // Code your solution in this file!
// const returnFirstTwoDrivers = function (driverList){
//  driverList = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//  return driverList.splice(0, 2);
// }

// const returnLastTwoDrivers = function(driversList){
//     driversList = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//     return driversList.splice(2, 2);
// }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// // const multipliedFare = function (fare, integer){
// //     return (fare*integer);
// // }

// // function createFareMultiplier(){ 
// //     return multipliedFare;
// // }

// // const fareDoubler = function(){
// //  return (createFareMultiplier *2);
// // }

// // function selectedDrivers(driver){
// //     if (driver = returnFirstTwoDrivers){
// //         return returnFirstTwoDrivers;
// //     } else {
// //         return returnLastTwoDrivers;
// //     } 
// // }

// // function selectDifferentDrivers(driverList, driver){
// //     if (driver = returnFirstTwoDrivers){
// //     return returnFirstTwoDrivers;
// //     } else{
// //         returnLastTwoDrivers;
// //     }
// // }

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return(drivers.slice(0,2));
}

const returnLastTwoDrivers = function(){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){
    return (function kings(number = "5"){
        return number * number;
    })
}

const fareDoubler = ((double) => {return double * 2;})

const  fareTripler = ((triple) => {return triple *3})

function selectDifferentDrivers(drivers,foo){
    return foo(drivers);
}
