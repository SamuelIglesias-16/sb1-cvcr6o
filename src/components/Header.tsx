import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Catalog', href: '#catalog' },
    { name: 'Contact', href: '#contact', onClick: scrollToContact },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Our Mission', href: '#mission' },
  ];

  return (
    <header className="bg-cream shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-amatic font-bold text-brown">Nordic Cookie Treats</div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="nav-link text-lg"
                onClick={item.onClick}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-brown">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="block nav-link text-lg"
                onClick={item.onClick}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;