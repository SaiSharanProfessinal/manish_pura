// src/components/ProductGallery.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: string;
  images: string[]; // Array of image URLs
}

interface ProductGalleryProps {
  product: ProductType;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <img src={selectedImage} alt="Selected" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          <div className="flex overflow-x-auto mt-4 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`cursor-pointer opacity-100 hover:opacity-100 rounded-md border-2 border-gray-300 ${selectedImage === image ? 'border-gray-900 border-2' : ''}`}
                onClick={() => setSelectedImage(image)}
                style={{ width: '100px', height: 'auto' }}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
    <p className="text-gray-600 text-lg mt-4">{product.description}</p>
    <h2 className="text-2xl font-semibold text-indigo-700 mt-4">{product.price}</h2>

    <Link href="/contactUs">
    <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
        Order
    </button>

    </Link>
</div>

      </div>
    </div>
  );
};

export default ProductGallery;
