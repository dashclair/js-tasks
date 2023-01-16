// 7.	Написать свою реализацию метода массива map (myMap) которая работает точно так же как существующая. 
// ВСЕ массивы должны иметь этот метод.

const numbers = [1,2,3,4];

Array.prototype.myMap = function(callback, thisArgument){
  const context = this;

  const obj = Object(this);

  if(arguments.length>1){
    context = thisArgument;
  }

  if (typeof callback !== 'function') {
    return Error ('Callback is not a function')
  }

  const length = obj.length;

  const newArray = [];
  
  for (let i = 0; i < length; i++) {
    
    if (i in obj) {
      newArray[i] = callback.call(context, this[i], i, obj);
    }
  }

  return newArray;

}

const result1 = numbers.myMap((number)=> number*2);
const result2 = numbers.myMap((number)=> String(number));


console.log (result1,result2)