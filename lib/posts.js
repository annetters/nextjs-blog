export async function getAllPostIds() {
  const res = await fetch('https://jsonplaceholder.org/posts')
  const posts = await res.json()
  return posts; 
}

// return post data based on ID
export async function getPostData(id) {
  const res = await fetch('https://jsonplaceholder.org/posts/'+id)
  const fileContents = await res.json();  // Parse JSON from response
  if (res.ok) {  // Check if response is ok (status 200-299)
    // console.log('id', id)
    // console.log('fileContents', fileContents);
    // ????????
    return {
      id,
      fileContents,
    }
  }
}