// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
    let second = from;
    let period = setInterval( function() {
        console.log(second);
        if(second == to) {
            clearInterval(period);
        }
        second ++;
    }, 1000)
}

printNumbers(5, 10);


function printNumbers(from, to) {
    let second = from;

    setTimeout(function start() {
        console.log(second);
        if(second < to) {
            setTimeout(start, 1000);
        }
        second++;
    }, 1000)
}

printNumbers(5, 10);