import React from 'react';

interface CookieCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const CookieCard: React.FC<CookieCardProps> = ({ name, image, onClick }) => {
  return (
    <div className="card flex flex-col animate-float">
      <img src={image} alt={name} className="w-full h-48 object-cover cookie-image" />
      <div className="p-6 flex-grow flex flex-col justify-between">
        <h3 className="font-amatic text-2xl mb-4 text-brown">{name}</h3>
        <button onClick={onClick} className="mt-auto btn btn-primary w-full">View Details</button>
      </div>
    </div>
  );
};

export default CookieCard;