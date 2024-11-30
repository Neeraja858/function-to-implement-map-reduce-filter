// Custom Implementation of map, reduce, filter, and flatMap

// 1. Custom map function
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// 2. Custom reduce function
function customReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

// 3. Custom filter function
function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

// 4. Custom flatMap function
function customFlatMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const mapped = callback(array[i], i, array);
        if (Array.isArray(mapped)) {
            result.push(...mapped);
        } else {
            result.push(mapped);
        }
    }
    return result;
}

// Example Usage
const numbers = [1, 2, 3, 4];

// Using customMap
const squared = customMap(numbers, num => num * num);
console.log("Custom Map:", squared); // [1, 4, 9, 16]

// Using customReduce
const sum = customReduce(numbers, (acc, num) => acc + num, 0);
console.log("Custom Reduce:", sum); // 10

// Using customFilter
const evenNumbers = customFilter(numbers, num => num % 2 === 0);
console.log("Custom Filter:", evenNumbers); // [2, 4]

// Using customFlatMap
const flatMapped = customFlatMap(numbers, num => [num, num * 2]);
console.log("Custom FlatMap:", flatMapped); // [1, 2, 2, 4, 3, 6, 4, 8]
