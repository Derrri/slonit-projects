export function myIncludes(arr, item, from = 0) {
    const length = arr.length;

    from = from < 0 ? Math.max(0, length + from) : Math.min(length, from);

    for (let i = from; i < length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }

    return false;
}

// function myIncludes(arr, item, from = 0) {
//     return arr.some((el, index) => el === item && index >= from);
// }