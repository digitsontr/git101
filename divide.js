/**
Divides a series of numbers.
@param {number} dividend - The number to be divided.
@param {...number} divisors - The numbers to divide the dividend by.
@returns {number} - The result of the division.
*/
function divide() {
    const argumentsArray = removeNotExpectedTypesFromArguments('number', arguments)

    return argumentsArray.slice(1).reduce((result, argument) => {
        if(result === 0 && argument === 0){
            console.error('0 can\'t be divided to 0');

            return 0;
        }

        return result / argument;
    }, argumentsArray[0]);
};

function removeNotExpectedTypesFromArguments(allowedType, arguments){
    newArguments = [];

    for (let arg of Array.from(arguments)) {
        if (typeof arg === allowedType && !(allowedType === 'number' && Number.isNaN(arg))) {
          newArguments.push(arg);
        }
    }

    return newArguments;
}