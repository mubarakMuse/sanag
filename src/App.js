import React from 'react';
import menuData from './menuData.json';

const MenuItem = ({ name, price, description, isLimitedTime = false }) => (
  <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
    <div className="card-body">
      {isLimitedTime && (
        <div className="badge badge-accent absolute top-2 right-2">Limited Time</div>
      )}
      <h2 className="card-title text-primary">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-xl font-bold text-secondary">${price.toFixed(2)}</p>
    </div>
  </div>
);

const MenuSection = ({ title, items }) => (
  <div className="mb-12">
    <h3 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const Menu = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-primary">Snaag Restaurant and Coffee</h1>
          <p className="text-2xl text-secondary">Authentic Somali Cuisine & Specialty Coffee</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="tel:+19526071824" className="btn btn-primary">
              Call Us
            </a>
            <a href="https://maps.app.goo.gl/bPmpFd3WyX4WfZuG8" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Get Directions
            </a>
          </div>
        </header>
        
        <div className="menu w-full max-w-7xl mx-auto">
          {Object.entries(menuData.menu).map(([sectionTitle, items]) => (
            <MenuSection key={sectionTitle} title={sectionTitle} items={items} />
          ))}
        </div>

        <footer className="mt-16 text-center text-base-content/70">
          <p>Prices are subject to change. Please inform us of any allergies.</p>
          <p className="mt-2">
            <a href="https://maps.app.goo.gl/bPmpFd3WyX4WfZuG8" target="_blank" rel="noopener noreferrer" className="link link-hover">
              1201 E Lake St suite 100, Minneapolis, MN 55407
            </a>
          </p>
          <p className="mt-2">
            <a href="tel:+19526071824" className="link link-hover">
              (952) 607-1824
            </a>
          </p>
          <p className="mt-4">© 2023 Snaag Restaurant and Coffee. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Menu;