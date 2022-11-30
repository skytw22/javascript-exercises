const sumAll = function(a, b) {
    let sum = 0;
    if (a>0 && b>0 && typeof a === "number" && typeof b === "number"){
        if (a<b) {
            for (let x=a; x<=b; x++){
                sum += x;
            }
            return sum;
        } else {
            for (let x=b; x<=a; x++){
                sum += x;
            }
            return sum;
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
