import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="grid">
      <Navbar />
      <Cart />
      <main className="main">{children}</main>
    </div>
  );
}
