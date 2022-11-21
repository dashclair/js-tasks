// У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).Найдите гипотенузу k по теореме.

const calcSideK = function (n, m) {
    return (Math.hypot(n, m))
}

console.log(calcSideK(3, 4))