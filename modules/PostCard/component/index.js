import React from 'react';

const PostCard = (props) => {
  const { title, thumbnails } = props;
  return (
    <div className='post-card'>
      <div className="post-card__thumbnail">
        <img src={thumbnails.default.url} alt=''/>
      </div>
      <div className="post-card__title">
          <b>{title}</b>
        </div>
    </div>
  )
}

export default PostCard;