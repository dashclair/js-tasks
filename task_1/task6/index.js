// Написать функцию которая принимает в себя строчное значение состоящее из одного слова. В слове могут быть буквы разных регистров. Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие в нижнем регистре.Если в слове четное количество букв, то и последняя буква должна быть заглавной

function getStringLine(stringText) {
    const FirstCapitalizedLetter = stringText[0].toUpperCase();
    const isCharsAmountEven = stringText.length % 2 === 0;

    if (isCharsAmountEven) {
        const LastCapitalizedLetter = stringText[ stringText.length - 1 ].toUpperCase();
        const restWord = stringText.slice(1, -1).toLowerCase();

        return `${ FirstCapitalizedLetter }${ restWord}${ LastCapitalizedLetter }`;
    }
    return `${FirstCapitalizedLetter}${stringText.slice(1).toLowerCase()}`
}

console.log(getStringLine('javaScrIpt'))