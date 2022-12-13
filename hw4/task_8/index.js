// Написать свою реализацию метода массива filter (myFilter) которая работает точно так же как существующая. 
// ВСЕ массивы должны иметь этот метод. 

const justArray = [1,2,3,4,4];

Array.prototype.myFilter = function(callback, thisArgument){

  const context = this;

  const obj = Object(this);

  if(arguments.length>1){
    context = thisArgument;
  }

  if (typeof callback !== 'function') {
    return Error ('Callback is not a function')
  }

  const length = obj.length;

  const result = [];
  
  for (let i = 0; i < length; i++) {
    
    if (i in obj) {
      
      if(callback.call(context, this[i], i, obj)){
        result.push(this[i])
      }
    }
  }

  return result;

}

const result1 = justArray.myFilter((number)=> number >2 );
const result2 = justArray.myFilter((number)=> number % 2 === 0);

console.log (result1, result2)