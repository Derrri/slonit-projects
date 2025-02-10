//Первое задание

function ucFirst(str) {
    if (typeof str !== 'string') {
        if (Array.isArray(str)) {
            str = str.join('');
        } else {
            return str;
        }
    }
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(ucFirst('коля'));

// Второе задание

function shortenText(inputString, maxLength) {
    if (typeof inputString !== 'string') {
        return inputString;
    }

    if (inputString.length <= maxLength) {
        return inputString;
    }

    let shortened = inputString.slice(0, maxLength);

    const lastValidIndex = Math.max(
        shortened.lastIndexOf(' '),
        shortened.lastIndexOf(','),
        shortened.lastIndexOf('.'),
        shortened.lastIndexOf('!'),
        shortened.lastIndexOf('?'),
        shortened.lastIndexOf(':'),
        shortened.lastIndexOf(';')
    );

    if (lastValidIndex !== -1) {
        shortened = shortened.slice(0, lastValidIndex);
    }

    return shortened.trim() + '...';
}

console.log(shortenText("Это очень длинная строка, которая не помещается в заданный размер.", 40));
console.log(shortenText("Короткая строка.", 40));
console.log(shortenText("Строка без пробеловдолжнаобрезатьсянаконце.", 40));

// Третье задание

function containsSubstring(mainString, subString) {
    return mainString.includes(subString) || subString.includes(mainString);
}

console.log(containsSubstring("Поляна", "Пол"));
console.log(containsSubstring("коллаборация", "бор"));
console.log(containsSubstring("тут", "фолс"));

// Вариант без учёта регистра

function containsSubstring2(mainString, subString) {
    const lowerMainString = mainString.toLowerCase();
    const lowerSubString = subString.toLowerCase();
    return lowerMainString.includes(lowerSubString) || lowerSubString.includes(lowerMainString);
}

console.log(containsSubstring2("Поляна", "пол"));