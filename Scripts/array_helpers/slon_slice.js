export function mySlice(arr, start = 0, end = arr.length) {
    const result = [];
    const length = arr.length;

    start = start < 0 ? Math.max(0, length + start) : Math.min(length, start);
    end = end < 0 ? Math.max(0, length + end) : Math.min(length, end);

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }

    return result;
}