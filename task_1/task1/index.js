function sayHello(name) {
    if (name === `Mark`) {
        const hello = `Hi`;
        return (hello + `,` + ` ` + name + `!`)
    } const hello = `Hello`;
    return (hello + `,` + ` ` + name + `!`)
};

console.log(sayHello(`Mark`));