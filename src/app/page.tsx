// src/app/page.tsx
"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import Slider from '@/components/Slider';
import PostProductForm from '@/components/post';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data/data.json');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="py-6">
      <PostProductForm/>
      <h1 className="text-3xl font-semibold text-center mb-6">Welcome to Our E-Commerce Store</h1>
      <div className="min-h-screen flex items-center justify-center">
      <Slider />
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>

            <Link href={`/product/${product.id}`}>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
