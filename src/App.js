import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './style.css';

export default function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}
