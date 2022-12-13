// Написать функция которая принимает строку, и допустимое количество символов. Если длина строки превышает допустимое количество символов, 
  // функция должна обрезать строку а в конец  добавить многоточие 
  
  const getstring = (string, num) => {
    if (string.length > num) {
      const result = string.slice(0, num)
      return `${result}...`
    } return string
  }
  
  console.log(getstring('Heт',3))