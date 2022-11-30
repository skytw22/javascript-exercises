const reverseString = function(string) {
    let strArray = string.split('');
    let strLength = strArray.length;
    let reverseStr = '';
    for (let i=0; i<strLength; i++) {
        reverseStr = reverseStr + strArray.pop();
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
