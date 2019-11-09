import React from 'react';
import { BlockTitle } from 'modules/shares';
import postsData from 'data/posts';
import PostCard from 'modules/PostCard/component';

const SetPostsA = (props) => {
  const classes = 'set-posts-a';

  return (
    <div className='set-posts'>
      <BlockTitle title='Set Posts A'/>
      <div className={classes}>
        {
          postsData.map((post,id) => (
            <PostCard
              key={`seta-post-${id}`}
              title={post.title}
              thumbnails={post.thumbnails}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SetPostsA;