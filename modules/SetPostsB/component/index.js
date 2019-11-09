import React from 'react';
import { BlockTitle } from 'modules/shares';
import {setBData} from 'data/posts';
import PostCard from 'modules/PostCard/component';

const SetPostsB = (props) => {
  const classes = 'set-posts-b set-posts-grid';

  return (
    <div className='set-posts'>
      <BlockTitle title='Set Posts B'/>
      <div className={classes}>
        {
          setBData.map((post,id) => (
            <PostCard
              key={`setb-post-${id}`}
              title={post.title}
              thumbnails={post.thumbnails}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SetPostsB;