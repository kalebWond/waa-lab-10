import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function AddPost() {
    const BASE_URL = "http://localhost:8080/api/v1"

    const formRef = useRef(null);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const body = {
            title: form["title"].value,
            author: form["author"].value,
            content: form["content"].value
        }
        axios.post(`${BASE_URL}/posts`, body)
            .then(res => navigate('/posts'))
            .catch(err => console.log(err))
        form.reset();
    }
    return (
        <form ref={formRef} className="mt-8 flex flex-col items-end">
            <input name="title" placeholder="Title" className="block my-3 py-1.5 px-3 border border-cyan-800 rounded" />
            <input name="author" placeholder="Author" className="block my-3 py-1.5 px-3 border border-cyan-800 rounded" />
            <input name="content" placeholder="Content" className="block my-3 py-1.5 px-3 border border-cyan-800 rounded" />
            <button onClick={(e) => onSubmit(e)} className="block my-3 py-1.5 px-3 bg-cyan-600 hover:bg-cyan-800 text-white font-medium rounded">Add Post</button>
        </form>
    )
}

export default AddPost