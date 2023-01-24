const btnFirst = document.querySelector('.first');
const btnSecond = document.querySelector('.second');
const btnThird = document.querySelector('.third');


btnFirst.addEventListener('click',(event) => {

    const random =  Math.floor((Math.random() *100) + 1);
    console.log(random)

    let enteredNumber =  parseInt(prompt(`enter number from 1 to 100. You have unlimited attempst`))
    

    while (enteredNumber !== random) {
        if (enteredNumber > random ) {
            alert(`${enteredNumber} is bigger than hidden number on ${enteredNumber-random}`)
            enteredNumber =  parseInt(prompt(`another chance `))
        } else if (enteredNumber < random) {
            alert(`${enteredNumber} is less than hidden number on ${random - enteredNumber}`)
            enteredNumber =  parseInt(prompt(`another chance`))
        }
    }

    if (enteredNumber === random) {
        return alert(`Correct!! Good job! The number was ${random}`)
    }

});

btnSecond.addEventListener('click',(event) => {

    const random =  Math.floor((Math.random() *100) + 1);
    console.log(random)

    let attempts = 0;
    let maximumAttempt = 5;
    let enteredNumber =  parseInt(prompt(`enter number from 1 to 100. You have ${maximumAttempt} attempst`));
    
    if (enteredNumber === random) {
        return alert('Correct!!')
    }

    while (enteredNumber !== random && attempts < maximumAttempt-1) {
        
        attempts++

        if (enteredNumber > random ) {
            alert(`${enteredNumber} is bigger than hidden number on ${enteredNumber-random}`)
            enteredNumber =  parseInt(prompt(`another chance. attempts left: ${maximumAttempt- attempts}`))
        } else {
            alert(`${enteredNumber} is less than hidden number on ${random - enteredNumber}`)
            enteredNumber =  parseInt(prompt(`another chance. attempts left: ${maximumAttempt- attempts}`))
        }
    }

    if(enteredNumber!==random && attempts >= maximumAttempt-1 || attempts >= maximumAttempt) {alert(`Oops, ${maximumAttempt} attempts ran out, the number was ${random}`);}
    else  {
    alert(`Good job! The number was ${random}`)
    }
});

btnThird.addEventListener('click',(event) => {

    const random =  Math.floor((Math.random() *100) + 1);
    console.log(random)

    let attempts = 0;
    let maximumAttempt = 3;
    let enteredNumber =  parseInt(prompt(`enter number from 1 to 100. You have ${maximumAttempt} attempst`));
    
    if (enteredNumber === random) {
        return alert('Correct!!')
    }

    while (enteredNumber !== random && attempts < maximumAttempt-1) {
        
        attempts++

        if (enteredNumber > random ) {
            alert(`${enteredNumber} is bigger than hidden number on ${enteredNumber-random}`)
            enteredNumber =  parseInt(prompt(`another chance. attempts left: ${maximumAttempt- attempts}`))
        } else {
            alert(`${enteredNumber} is less than hidden number on ${random - enteredNumber}`)
            enteredNumber =  parseInt(prompt(`another chance. attempts left: ${maximumAttempt- attempts}`))
        }
    }

    if(enteredNumber!==random && attempts >= maximumAttempt-1 || attempts >= maximumAttempt) {alert(`Oops, ${maximumAttempt} attempts ran out, the number was ${random}`);}
    else  {
    alert(`Good job! The number was ${random}`) ; 
    }
});