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
  const navbarLinks = routes.map((item) => <Link href={item.path}>{item.label}</Link>);
  return <nav>{navbarLinks}</nav>;
}
