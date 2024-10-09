import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brown text-cream py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-amatic mb-4">Nordic Cookie Treats</h3>
            <p className="text-lg">Delicious cookies made with love in the heart of Scandinavia.</p>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-2xl font-amatic mb-4">Contact Us</h4>
            <p className="text-lg">Email: samuel.iglesias.erdei@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;