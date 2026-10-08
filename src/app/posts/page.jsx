import React from 'react';
import Post from "../component/post";

const postpage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();
    return (
        <div>
            <h2>Post page: {posts.length}</h2>
            <div className='border border-green-400 grid grid-cols-3 gap-6'>
 {posts.map((post) => (
  <Post key={post.id} post={post} />
))}
            </div>
        </div>
    );
};

export default postpage;