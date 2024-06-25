"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Header from './hotel/Header';
import Sidebar from './hotel/Sidebar';
import DishCard from './hotel/DishCard';

// Define the types for the dish and cart props
interface Dish {
  name: string;
  bowlsAvailable: number;
  imageSrc: string;
  isVegetarian: boolean;
  category: string;
}

interface CartItem extends Dish {
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onIncreaseQuantity: (name: string) => void;
  onDecreaseQuantity: (name: string) => void;
  onRemoveItem: (name: string) => void;
}

// Cart component
const Cart: React.FC<CartProps> = ({ cartItems, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) => {
  if (cartItems.length === 0) return null;

  return (
    <div className="bg-black text-white w-96 p-4">
      <div className="text-xl font-bold mb-4">Orders #34562</div>
      <div className="flex space-x-2 mb-4">
        <button className="bg-zinc-700 text-white px-4 py-2 rounded-lg">Dessert</button>
        <button className="bg-zinc-700 text-white px-4 py-2 rounded-lg">To Go</button>
        <button className="bg-zinc-700 text-white px-4 py-2 rounded-lg">Delivery</button>
      </div>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={item.imageSrc} alt="dish image" className="w-10 h-10 rounded-full" />
              <div>
                <div>{item.name}</div>
                <div className="text-sm text-zinc-400">Rs 199</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => onDecreaseQuantity(item.name)}>-</button>
              <input type="number" value={item.quantity} readOnly className="w-12 text-black text-center" />
              <button onClick={() => onIncreaseQuantity(item.name)}>+</button>
              <div>Rs {199 * item.quantity}</div>
              <button onClick={() => onRemoveItem(item.name)} className="text-red-600">🗑️</button>
            </div>
          </div>
        ))}
        <input type="text" placeholder="Order Note..." className="w-full px-4 py-2 rounded-lg text-black" />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <div>Discount</div>
          <div>Rs 200</div>
        </div>
        <div className="flex justify-between">
          <div>Sub total</div>
          <div>Rs {cartItems.reduce((total, item) => total + 199 * item.quantity, 0)}</div>
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">SAVE</button>
          <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">PAY</button>
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">Bill Preview</button>
          <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">Print</button>
          <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">KOT</button>
          <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">Order Preview</button>
        </div>
      </div>
    </div>
  );
};

const allDishes: Dish[] = [
  { name: 'Spicy seasoned seafood noodles', bowlsAvailable: 20, imageSrc: '/dish1.jpg', isVegetarian: false, category: 'Hot Dishes' },
  { name: 'Salted Pasta with mushroom sauce', bowlsAvailable: 11, imageSrc: '/dish2.jpg', isVegetarian: true, category: 'Hot Dishes' },
  { name: 'Beef dumpling in hot and sour soup', bowlsAvailable: 16, imageSrc: '/dish5.jpg', isVegetarian: false, category: 'Soup' },
  { name: 'Grilled Chicken', bowlsAvailable: 20, imageSrc: '/dish6.jpg', isVegetarian: false, category: 'Grill' },
  { name: 'Healthy noodle with spinach leaf', bowlsAvailable: 22, imageSrc: '/dish4.jpg', isVegetarian: true, category: 'Cold Dishes' },
  { name: 'Hot spicy fried rice with omelet', bowlsAvailable: 13, imageSrc: '/dish3.jpg', isVegetarian: false, category: 'Hot Dishes' },
  { name: 'Cheese Burger', bowlsAvailable: 10, imageSrc: '/images/dish7.jpg', isVegetarian: false, category: 'Appetizer' },
];

const categories = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert'];

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Hot Dishes');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (dish: Dish) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.name === dish.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === dish.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...dish, quantity: 1 }];
      }
    });
  };

  const handleIncreaseQuantity = (name: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (name: string) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (name: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== name));
  };

  const filteredDishes = allDishes.filter(dish =>
    dish.category === selectedCategory && dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Head>
          <title>EATOFY</title>
        </Head>
        <Header
          searchQuery={searchQuery}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
        />
        <main className="p-4">
          <h2 className='text-black text-lg font-bold ml-3'>Choose Dishes</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 ${selectedCategory === category ? 'text-red-500 font-bold' : 'text-gray-500'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
            {filteredDishes.map((dish, index) => (
              <div key={index} onClick={() => handleAddToCart(dish)}>
                <DishCard
                  name={dish.name}
                  bowlsAvailable={dish.bowlsAvailable}
                  imageSrc={dish.imageSrc}
                  isVegetarian={dish.isVegetarian}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
      <Cart
        cartItems={cartItems}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Home;
