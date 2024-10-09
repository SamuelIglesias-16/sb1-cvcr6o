import React from 'react';

interface Cookie {
  id: number;
  name: string;
  image: string;
}

interface CookieModalProps {
  cookie: Cookie;
  onClose: () => void;
}

const CookieModal: React.FC<CookieModalProps> = ({ cookie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-cream p-8 rounded-3xl shadow-lg max-w-md w-full">
        <h2 className="font-amatic text-3xl mb-4 text-brown">{cookie.name}</h2>
        <img src={cookie.image} alt={cookie.name} className="w-full h-48 object-cover mb-6 rounded-2xl" />
        <div className="mb-6">
          <h3 className="font-quicksand font-bold mb-2 text-lg">Pricing:</h3>
          <p className="text-lg">10 for 90kr</p>
          <p className="text-lg">5 for 50kr</p>
        </div>
        <p className="mb-6 text-lg">
          To order, please email us at samuel.iglesias.erdei@gmail.com with the types of cookies you want to order and the amount.
        </p>
        <button onClick={onClose} className="btn btn-primary w-full">Close</button>
      </div>
    </div>
  );
};

export default CookieModal;