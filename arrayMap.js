function hasSubarrayWithSum(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// some examples:
const arr = [1, 2, 3, 7, 5];
const target = 12;
console.log(hasSubarrayWithSum(arr, target)); // Output: true

const arr2 = [1, 2, 3, 7, 5];
const target2 = 11;
console.log(hasSubarrayWithSum(arr2, target2)); // Output: false
