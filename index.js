// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return Math.abs(42 - someValue); 
}

function distanceFromHqInFeet(someValue){
    let newValue = distanceFromHqInBlocks(someValue);
    newValue = newValue *264
    return newValue;

}

function distanceTravelledInFeet(someValue,someValue2){
    let newValue = distanceFromHqInFeet(distanceFromHqInBlocks(someValue));
    let newValue2 = distanceFromHqInFeet(distanceFromHqInBlocks(someValue2));
    return Math.abs(newValue2-newValue);
}

function calculatesFarePrice(start,destination){
    let newValue = distanceTravelledInFeet(start,destination);
    if (newValue <= 400){
        return 0;
    }
    else if (newValue > 400 && newValue < 2000){
        let newValue2 = newValue - 400;
        newValue2 = newValue2 * .02 ;
        return newValue2;
    }
    else if (newValue > 2000 && newValue < 2500 ){
        return 25;
    }
    else if  (newValue >= 2500){
        return 'cannot travel that far';
    }
}