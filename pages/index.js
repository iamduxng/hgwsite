import React from 'react';
import { SetPostsA, SetPostsB, SetPostsC } from 'modules';

function Home() {
  return <div className="right-section">
    <SetPostsA />
    <SetPostsB />
    <SetPostsC />
  </div>
}

export default Home