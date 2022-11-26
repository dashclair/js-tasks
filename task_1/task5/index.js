// Создать функцию deleteCharts, которая удаляет первый и последний символы строки, которая передаёт в параметр, и возвращает новую строку без этих символов

function deleteCharts(str) {
    return str.slice(1, -1)
}

console.log(deleteCharts('Hello'))