import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import Comments from './Comments';
import { useNavigate, useParams } from 'react-router-dom';

function PostDetails() {
    const BASE_URL = "http://localhost:8080/api/v1";
    const [post, setPost] = useState({})
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${BASE_URL}/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
        //eslint-disable-next-line
    }, [])

    
  const onDeleteHandler = (id) => {
    axios.delete(`${BASE_URL}/posts/${id}`)
      .then(() => {
        navigate("/posts", {replace: true})
      })
      .catch(err => console.log(err))
  }

    //eslint-disable-next-line
    const memoizedComments = useMemo(() => post.comments, [id])

    if (!post.id) return null;
    return (
        <div className="flex flex-col border w-full px-6 py-8 mt-4">
            <p className="text-xl font-medium self-center uppercase mb-3">{post.title}</p>
            <p className="mb-4 text-lg self-center">{post.author}</p>
            <p className="mb-4">{post.content}</p>
            {memoizedComments && <Comments comments={memoizedComments} />}
            <div className="flex self-center text-lg">
                <button className="mr-3 text-cyan-600">Edit</button>
                <button onClick={() => onDeleteHandler(post.id)} className="rounded-md px-2 py-1 text-red-600 hover:bg-red-100">Delete</button>
            </div>
        </div>
    )

}

export default PostDetails