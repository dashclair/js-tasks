// task 2

const requestTask = async() =>{
    try{
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json());

    const users = await fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json());

    const postsMap = new Map();

    const gettingPosts = posts.forEach(post => {
        if (!postsMap.has(post.userId)) {
            postsMap.set(post.userId,[post.title]);
        } else {
            postsMap.get (post.userId).push(post.title)
        }
    });

    const gettingUsers = users.map(user =>{
        return  {
            ... user,
            MyPosts:postsMap.get(user.id)
        }
    });

    console.log(gettingUsers);

    } catch (error) {
        console.log(error);
    };
};

requestTask()
