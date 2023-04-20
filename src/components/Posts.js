import React from 'react'
import Post from './Post'

function Posts({posts}) {
       
  return (
    <div className="flex justify-between flex-wrap mb-6">
        { posts.map(post => <Post key={post.id} post={post} />) }
    </div>
  )
}

export default Posts