import React from 'react'
import Posts from '../components/Posts'
import PostDetails from '../components/PostDetails';
import AddPost from '../components/AddPost';
import Header from '../components/Header';
import { Route, Routes } from 'react-router-dom';

function Dashboard() {

  return (
    <>
      <div className="w-full bg-cyan-500 py-4">
        <Header />
      </div>
      <div className="max-w-4xl mx-auto py-16">
        <Routes>
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="add-post" element={<AddPost />} />
        </Routes>
      </div>
    </>
  )
}

export default Dashboard