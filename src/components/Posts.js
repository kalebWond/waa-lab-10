import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios';

function Posts() {
  const BASE_URL = "http://localhost:8080/api/v1"
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get(`${BASE_URL}/posts`).then(
      res => {
        setPosts(res.data)
      }).catch(
        err => {
          console.log(err)
        }
      )
  }, [])


  return (
    <div className="flex justify-between flex-wrap mb-6">
      {posts.map(post => <Post key={post.id} post={post} />)}
    </div>
  )
}

export default Posts