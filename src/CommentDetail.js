import React from 'react'
import faker from 'faker'

const CommentDetail = (props) => {
  return (
    <div className='comment'>
        <a href='/' className='avatar'>
          <img src={props.img} alt='avatar'/>
        </a>
        <div className='content'>
          <a href='/' className='author'>
          {props.author}
          </a>
        
        <div className='metadata'>
          <span className='data'>{props.timeAgo}</span>
        </div>
        <div className='text'>Nice Blog Post!</div>
        </div>
      </div>
  )
}

export default CommentDetail