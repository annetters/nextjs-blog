
export async function getAllPostIds() {

  const res = await fetch('https://jsonplaceholder.org/posts')
  const posts = await res.json()

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     } 
  //   }
  // ]
  return posts.map((item) => {
    return {
      params: {
        id: item.toString(),
      },
    };
  });
}

// return post data based on ID
export async function getPostData(id) {
  const res = await fetch('https://jsonplaceholder.org/posts')
  const posts = await res.json();
  const fileContents = id.content;

  // ????????
  return {
    id, 
    ...fileContents.data,
  }
}