import { ShopContext } from 'context/shopContext';
import Link from 'next/link';
import React, { useContext } from 'react';

export default function Navbar() {
  const {
    state: { isCartOpen },
    dispatch,
  } = useContext(ShopContext);
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

  const toggleCart = () => {
    if (!isCartOpen) {
      dispatch({ type: 'OPEN_CART' });
    } else {
      dispatch({ type: 'CLOSE_CART' });
    }
  };
  return (
    <nav className="navbar">
      <div className="innerNav">
        <div className="logo">logo</div>
        <ul>{navbarLinks}</ul>
        <div className="cartLogo" onClick={toggleCart}>
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
