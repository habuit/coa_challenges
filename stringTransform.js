function transformString(str) {
    const length = str.length;
    let transformedStr = str;

    if (length % 15 === 0) {
        // Divisible by both 3 and 5
        transformedStr = reverseString(transformedStr);
        transformedStr = replaceWithAscii(transformedStr);
    } else if (length % 3 === 0) {
        // Divisible by 3
        transformedStr = reverseString(transformedStr);
    } else if (length % 5 === 0) {
        // Divisible by 5
        transformedStr = replaceWithAscii(transformedStr);
    }

    return transformedStr;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function replaceWithAscii(str) {
    return str.split('').map(char => char.charCodeAt(0)).join(' ');
}

//some examples  string tranformation 
const str1 = "jean1"; // Length is 5, divisible by 5
console.log(transformString(str1)); // Output: ASCII codes for "jean1"

const str2 = "habumurem"; // Length is 9, divisible by 3
console.log(transformString(str2)); // Output: "merumubah"

const str3 = "pin"; // Length is 9, divisible by 3
console.log(transformString(str3)); // Output: "nip"

const str4 = "baptiste12"; // Length is 10, divisible by 5
console.log(transformString(str4)); // Output: ASCII codes for "baptoste12"

const str5 = "strawberryjuice"; // Length is 15, divisible by 15
console.log(transformString(str5)); // Output: Reversed string with ASCII codes

