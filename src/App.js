import React, { useState } from 'react';
import menuData from './menuData.json';

const MenuItem = ({ name, price, description, isLimitedTime = false }) => (
  <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
    <div className="card-body p-4">
      {isLimitedTime && (
        <div className="badge badge-accent absolute top-2 right-2 text-xs">Limited Time</div>
      )}
      <h2 className="card-title text-primary text-lg">{name}</h2>
      <p className="text-xs text-gray-600 mt-1">{description}</p>
      <p className="text-lg font-bold text-secondary mt-2">${price.toFixed(2)}</p>
    </div>
  </div>
);

const MenuSection = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold mb-4 text-primary border-b border-primary pb-2">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const Menu = () => {
  const [activeTab, setActiveTab] = useState('coffeeShop');

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-primary">Snaag Restaurant and Coffee</h1>
          <p className="text-xl sm:text-2xl text-secondary">Authentic Somali Cuisine & Specialty Coffee</p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="tel:+19526071824" className="btn btn-primary btn-sm sm:btn-md">
              Call Us
            </a>
            <a href="https://maps.app.goo.gl/bPmpFd3WyX4WfZuG8" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm sm:btn-md">
              Get Directions
            </a>
          </div>
        </header>
        
        <div className="tabs tabs-boxed justify-center mb-6">
          <button 
            className={`tab tab-sm sm:tab-md ${activeTab === 'coffeeShop' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('coffeeShop')}
          >
            Coffee Shop
          </button>
          <button 
            className={`tab tab-sm sm:tab-md ${activeTab === 'restaurant' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('restaurant')}
          >
            Restaurant
          </button>
        </div>

        <div className="menu w-full max-w-7xl mx-auto">
          {activeTab === 'coffeeShop' && (
            <>
              <h2 className="text-3xl font-bold mb-6 text-center text-primary">Coffee Shop Menu</h2>
              {Object.entries(menuData.coffeeShop).map(([sectionTitle, items]) => (
                <MenuSection key={sectionTitle} title={sectionTitle} items={items} />
              ))}
            </>
          )}

          {activeTab === 'restaurant' && (
            <>
              <h2 className="text-3xl font-bold mb-6 text-center text-primary">Restaurant Menu</h2>
              {Object.entries(menuData.restaurant).map(([sectionTitle, items]) => (
                <MenuSection key={sectionTitle} title={sectionTitle} items={items} />
              ))}
            </>
          )}
        </div>

        <footer className="mt-12 text-center text-base-content/70 text-sm">
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