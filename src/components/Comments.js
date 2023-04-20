import React from 'react'

function Comments({comments}) {
  console.log("comment render")
  return (
    <ul className="ml-10">
        {comments.map(comment => <li key={comment.id}>{comment.name}</li>)}
    </ul>
  )
}

export default React.memo(Comments)