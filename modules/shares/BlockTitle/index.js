import React from 'react';

const BlockTitle = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <div className="mt-4 mb-8 border-b-2 border-black"></div>
    </>
  )
}

export default BlockTitle;