// Написать функцию, которая принимает букву, если буква является большой, функция возвращает ‘Оууу май, большая буква!’. В ином случае ‘Нет уж, маленькие буквы - скучно’

function toCheckLetter(checkedLetter) {
    if (checkedLetter === checkedLetter.toUpperCase()) {
        return `Оууу май, большая буква!`
    } return `Нет уж, маленькие буквы - скучно`
}

console.log(toCheckLetter('A'))