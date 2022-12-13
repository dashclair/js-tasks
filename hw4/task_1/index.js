// TASK 1 

const videos = [{
    id:3676345,
    title:'The Chamber'
  }, {
    id:36489204745,
    title:'The Fracture'
  }, {
    id:709374,
    title:'Die Hard'
  }
  ];
  
  const sortVideos = (videos)=> {
    return videos.reduce((result,{id,title})=> {
      result[id] = title;
  
      return result;
    }, {});
  
  }
  
  console.log(sortVideos(videos));