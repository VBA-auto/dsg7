"use client";
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

const CartDrawer = ({ product }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const addToCart = (size, color, quantity) => {
    setCartItems(prev => [...prev, {
      id: Date.now(), // unique ID for each cart item
      productId: product.id,
      name: product.name,
      size,
      color,
      quantity,
      price: product.price,
      image: product.gallary[0]
    }]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    const queryParams = encodeURIComponent(JSON.stringify(cartItems));
    router.push(`/checkout?items=${queryParams}`);
  };

  if (!mounted) return null;

  return createPortal(
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
      </div>
      <div className="drawer-side z-[9999]">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="bg-base-200 text-base-content min-h-full w-[500px] p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <label htmlFor="my-drawer-4" className="btn btn-sm btn-circle">✕</label>
          </div>

          {/* Add New Item Section */}
          <AddNewItem 
            product={product} 
            onAdd={addToCart} 
          />
          
          {/* Cart Items List */}
          <div className="mt-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              cartItems.map(item => (
                <CartItem 
                  key={item.id}
                  item={item}
                  onRemove={() => removeFromCart(item.id)}
                  onUpdateQuantity={(qty) => updateQuantity(item.id, qty)}
                />
              ))
            )}
          </div>

          {/* Cart Total */}
          {cartItems.length > 0 && (
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Total:</span>
                <span className="font-semibold">৳{total}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full py-2 rounded-lg mt-4 bg-blue-500 hover:bg-blue-600 text-white"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

// Add New Item Component
const AddNewItem = ({ product, onAdd }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (!selectedSize || !selectedColor) return;
    onAdd(selectedSize, selectedColor, quantity);
    // Reset form
    setSelectedSize('');
    setSelectedColor('');
    setQuantity(1);
  };

  return (
    <div className="border rounded-lg p-4">
      {/* Product Basic Info - Added this section */}
      <div className="flex gap-4 mb-4 pb-4 border-b">
        <img 
          src={product.gallary[0]} 
          alt={product.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          <p className="text-blue-500 font-semibold mt-2">৳{product.price}</p>
        </div>
      </div>
      
      {/* Size Selection */}
      <div className="mb-3">
        <p className="text-sm mb-1">Select Size:</p>
        <div className="flex space-x-2">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 border rounded-md text-sm transition-colors
                ${selectedSize === size 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
                }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="mb-3">
        <p className="text-sm mb-1">Select Color:</p>
        <div className="flex space-x-2">
          {product.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all
                ${selectedColor === color 
                  ? 'ring-2 ring-blue-500 ring-offset-2' 
                  : 'hover:scale-110'
                }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm">Quantity:</span>
        <div className="flex border rounded">
          <button 
            onClick={() => quantity > 1 && setQuantity(q => q - 1)}
            className="px-2 py-1 border-r hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-4 py-1">{quantity}</span>
          <button 
            onClick={() => setQuantity(q => q + 1)}
            className="px-2 py-1 border-l hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAdd}
        disabled={!selectedSize || !selectedColor}
        className={`w-full py-2 rounded-lg ${
          !selectedSize || !selectedColor
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white`}
      >
        Add to Cart
      </button>
    </div>
  );
};

// Cart Item Component
const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <div className="text-sm text-gray-600">
          <p>Size: {item.size}</p>
          <div className="flex items-center gap-1">
            <span>Color:</span>
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: item.color.toLowerCase() }}
            ></div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex border rounded">
            <button 
              onClick={() => onUpdateQuantity(item.quantity - 1)}
              className="px-2 py-1 border-r hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-3 py-1">{item.quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(item.quantity + 1)}
              className="px-2 py-1 border-l hover:bg-gray-100"
            >
              +
            </button>
          </div>
          <button 
            onClick={onRemove}
            className="text-red-500 hover:text-red-600"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">৳{item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartDrawer; 