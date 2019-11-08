import React from 'react';
import routes from 'routes';
import Navbar from 'modules/Navbar';

function Home() {
  return <>
    <Navbar routes={routes}/>
    <div>Welcome to Next.js</div>
    
  </>
}

export default Home