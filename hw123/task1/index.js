// task 1 1.	Creates an array of elements split into groups the length of size. 
// If array can't be split evenly, the final chunk will be the remaining elements.

const elements = ['a','b','c','d', 'e'];

const splittingArray = (array, size) => {

const count = Math.ceil(array.length/size)

const result = [];

for (let i = 0; i < count; i++) {
   
   if(array.length < size) {
      const warning = 'not enough elements'
      return warning
   } 
   result.push(array.slice(i*size, size*(i+1)))
}
return result

};

console.log(splittingArray(elements, 2));
