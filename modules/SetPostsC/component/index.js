import React from 'react';
import { BlockTitle } from 'modules/shares';
import {setCData} from 'data/posts';
import PostCard from 'modules/PostCard/component';

const SetPostsC = (props) => {
  const classes = 'set-posts-c set-posts-grid';

  return (
    <div className='set-posts'>
      <BlockTitle title='Set Posts C'/>
      <div className={classes}>
        {
          setCData.map((post,id) => (
            <PostCard
              key={`setc-post-${id}`}
              title={post.title}
              thumbnails={post.thumbnails}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SetPostsC;