// TASK 5 (done, but check)
// Функция принимает массив чисел, 
// а возвращает чсло которое встречается лишь 1 раз 

// first

const findOneNumber = (numbers) => {
    const numbersMap = numbers.reduce((resultNumber, number) => {
        if (resultNumber[number]) {
            resultNumber[number] += 1;
          } else {
            resultNumber[number] =1;
          }
      
          return resultNumber
    }, {});

    for (const number in numbersMap) {
        const mappingNumber = numbersMap[number]

        if (mappingNumber===1) {
            return +number;
        }
    }
    
    return numbersMap

};

console.log(findOneNumber([1,1,2,3,3,3]));

// second
const numbers = [1,1,1,2,2,2,3,3,4]

const serchNumber = (numbers) =>{
    return numbers.find(number=>numbers.indexOf(number)=== numbers.lastIndexOf(number)
)}

console.log(serchNumber(numbers))