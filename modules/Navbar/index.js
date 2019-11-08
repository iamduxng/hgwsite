import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navLinks = [
  {
    label: "Home",
    path: "/home",
    icon: <FontAwesomeIcon icon="home" />
  },
  {
    label: "Category",
    path: "/category",
    icon: <FontAwesomeIcon icon="clipboard-list" />
  },
  {
    label: "Search",
    path: "/search",
    icon: <FontAwesomeIcon icon="search" />
  }
];

const Navbar = (props) => {
  return (
    <div className="navbar">
      {navLinks.map((link,id) => (
        <Link key={`nav-item-${id}`} href={link.path}>
          <a className="navbar__item nav-item">
            <span className="nav-item__icon">{link.icon}</span>
            {link.label}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Navbar;