
// TODO
// array[0] - обратиться к 1му эл-ту массива
// array[array.length - 1] - обратиться к последнему эл-ту массива

// TODO method push

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.push(10, 11))

// TODO добавляем эл-т в конец массива
function superPush(array, el) {
    array[array.length] = el;
    return array.length;
}
superPush(numbers, 12)

// TODO добавляем несколько эл-тов в конец массива
function superPushPlus(array, ...rest) {
    for (let i = 0; i < rest.length; i++) {
        array[array.length] = rest[i];
    }
    return array.length;
}
superPushPlus(numbers, 12, 13, 14)
console.log(numbers)


function superPushPlus2(array, ...rest) {
    for (el of rest) {
        array[array.length] = el;
    }
    return array.length;
}
superPushPlus2(numbers, 100, 200)
console.log(numbers)


// TODO method pop

// TODO удаляем последний эл-т массива
function superPop(array, el) {
    const lastEl = array[array.length - 1];
    array.length = array.length - 1;
    return lastEl;
}

console.log(superPop(numbers))
console.log(numbers)
