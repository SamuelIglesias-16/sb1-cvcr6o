import React from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemove: (id: number) => void;
  onPlaceOrder: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onPlaceOrder }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-cream p-4 rounded-lg shadow-md">
      <h2 className="font-playfair text-2xl mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>{item.price * item.quantity} SEK</span>
              <button onClick={() => onRemove(item.id)} className="text-maroon hover:text-red-700">Remove</button>
            </div>
          ))}
          <div className="mt-4 font-bold">Total: {total} SEK</div>
          <button onClick={onPlaceOrder} className="mt-4 btn btn-primary w-full">Place Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;