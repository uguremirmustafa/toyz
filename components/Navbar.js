import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const routes = [
    {
      path: '/',
      label: 'Home',
      featured: false,
    },
  ];
  const navbarLinks = routes.map((item) => (
    <li key={item.path}>
      <Link href={item.path}>{item.label}</Link>
    </li>
  ));
  return (
    <nav className="navbar">
      <div className="innerNav">
        <div className="logo">logo</div>
        <ul>{navbarLinks}</ul>
      </div>
    </nav>
  );
}
