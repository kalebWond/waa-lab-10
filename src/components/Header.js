import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="max-w-4xl mx-auto flex justify-center">
        <div className="flex-grow flex justify-center">
            <Link className="mr-6" to="posts">Posts</Link>
            <Link to="add-post">New Post</Link>
        </div>
        <div className="">
            <Link to="/login">Sign In</Link>
        </div>
    </div>
  )
}

export default Header