import React from 'react';
import Link from 'next/link';

const Navbar = (props) => {
  console.log(props);
  return (
    <div class="navbar">
      <Link href='/home'>
        <a>Home page</a>
      </Link>
      <Link href='/category'>
        <a>Category page</a>
      </Link>
      <Link href='/search'>
        <a>Search page</a>
      </Link>
    </div>
  )
}

export default Navbar;