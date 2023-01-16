

const someObj = {
    a: 1,
    b: 'Hello',
    c: null,
    z: undefined,
    x:'hi',
    m: null,
    v: null,
    f:34
  }
 
  const newObject = (fields) => {

    const entries = Object.entries(fields);
    const deleted = entries.filter(entrie=> !entrie.includes(null) && !entrie.includes(undefined))
    return Object.fromEntries(deleted)
}


  console.log(newObject(someObj));
