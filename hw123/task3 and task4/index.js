// task 3 Написать метод которые повторяет логику Object.entries(). 

const someobj = {
    day: 'Sunday',
    month:'January'
 }
 
 Object.customEntries = obj => {
    
    const keys = Object.keys(obj);
 
    const result = [];
 
    for (let i = 0; i < keys.length; i++) {
       result[i] = [keys[i], obj[keys[i]]];
    }
 
    return result;
 }
 
 const newArr = Object.customEntries(someobj)
console.log(newArr)


// task 4 Написать метод которые повторяет логику Object.fromEntries(). 

Object.customFromEntries = arr => { 
   const newObj = {};

   arr.forEach (array => {
      return newObj[array[0]] = array[1]
   })

   return newObj

};

console.log(Object.customFromEntries(newArr))