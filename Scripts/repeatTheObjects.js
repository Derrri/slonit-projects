let userStats = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
};

function sumUserMetrics(obj) {
    return Object.values(obj)
        .filter(value => typeof value === 'number')
        .reduce((sum, value) => sum + value, 0);
}

function getSortedFieldNames(obj) {
    return Object.entries(obj)
        .filter(([key, value]) => typeof value === 'number')
        .sort((a, b) => b[1] - a[1])
        .map(([key]) => key);
}

console.log(sumUserMetrics(userStats));
console.log(getSortedFieldNames(userStats));