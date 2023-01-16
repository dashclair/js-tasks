// TASK 3 


const findNumber = (numbers) => {
    const numberCount = numbers.reduce((result, number)=> {
      if (!result[number]) {
        result[number] = 1;
      } else {
        result[number] +=1;
      }
  
      return result
    }, {});
  
  
    const entries = Object.entries(numberCount);
  
    const [key] = entries.reduce((result, currentArray, index) => {
      const [resultKey, resultValue] = result;
      const [currentKey, currentValue] = currentArray;
  
      if (resultValue === currentValue) {
        return +resultKey > +currentKey ? result : currentArray;
      }
  
      return resultValue > currentValue ? result : currentArray;
    });
  
    return Number(key); 
  
  }
  
  console.log (findNumber([1,2,3,3,4,4,4,4,4]));