function sayHello(name) {
    const SPECIAL_NAME = 'mark';

    const isMark = name.toLowerCase() === SPECIAL_NAME;
    if (isMark) {
        return `Hi, Mark!`
    } return `Hello, ${name}!`
};

console.log(sayHello(`marK`));