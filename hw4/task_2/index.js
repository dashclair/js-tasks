// TASK 2 
const boxarts = [
  {
    width:2,
    height:9,
    url:'one'
  },  
  
  {
      width:3,
      height:1,
      url:'two'
    },
  
    {
      width:400,
      height:8,
      url:'three'
    },
  
    {
      width:9,
      height:10,
      url:'four'
    },
    {
      width:5,
      height:9,
      url:'five'
    }, 
  ];
  
  const getURL = (boxarts) => {

    const findSqr = boxarts.reduce((result, {width, height, url}) => {
      result[width * height] = url;
      
      return result
    }, {});

    const entries = Object.entries(findSqr);
    const findURL = entries.reverse()[0][1];

    return findURL
}

console.log(getURL(boxarts));