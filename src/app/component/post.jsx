import React from 'react';

const Post = ({post}) => {
    return (
        <div className='border border-amber-600'>
         <p>  {post.title} </p> 
           <p>{post.className}</p>
           <h1>{post.React}</h1>
        </div>
    );
};

export default Post;