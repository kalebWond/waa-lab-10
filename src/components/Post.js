import React, { useContext } from 'react'
import SelectedIdContext from '../context/SelectedIdContext'

function Post({post, onPostSelect}) {
  const sth = useContext(SelectedIdContext);

  return (
    <div onClick={() => sth.onPostSelect(post.id)} className="flex flex-col m-3 bg-cyan-600 text-white text-lg px-10 py-8 rounded-md shadow-md">
      <p><span className="font-light">ID:</span> {post.id}</p>
      <p><span className="font-light">Title:</span> {post.title}</p>
      <p><span className="font-light">Author:</span> {post.author}</p>
    </div>
  )
}

export default Post