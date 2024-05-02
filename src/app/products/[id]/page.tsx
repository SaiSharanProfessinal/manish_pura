// src/pages/HomePage.tsx
import React from 'react';
import ProductGallery from '@/components/products/productGallery'; // Adjust the import path as necessary
import Product from '@/components/products/productShow';
import Navbar from '@/components/navrbar';
import Link from 'next/link';
import { redirect } from 'next/navigation'


// Sample product data
const sampleProduct = {
  id: 1,
  title: 'Flavored Drink',
  description: 'Delicious flavored milk in Rose,chocolate,badham',
  price: 'Rs.35.00',
  images: [
    '/Badam-Milk.png',
    '/Chocolate-Milk.png',
    '/Rose-Milk.png',
  ],
};
const products = [
  {
    id: 1,
    color:"gray",
    imageUrl: '/Chocolate-Milk.png',
    title: 'Chocolate Milk',
    description: 'Indulge in the rich and creamy Chocolate Milk from Pura Company, crafted to deliver a delightful taste experience with every sip.',
    price: 'Rs.35.00'
  },
  {
    id: 2,
    color:"red",
    imageUrl: '/Rose-Milk.png',
    title: 'Rose Milk',
    description: 'Experience the soothing and aromatic Rose Milk by Pura Company, a perfect blend of traditional flavors with a modern twist.',
    price: 'Rs.35.00'
  },
  {
    id: 3,
    color:"orange",
    imageUrl: '/Badam-Milk.png',
    title: 'Badam Milk',
    description: 'Enjoy the nourishing and exquisite Badam Milk made by Pura Company, enriched with the goodness of almonds for your health.',
    price: 'Rs.35.00'
  },
  {
    id: 4,
    color:"gray",
    imageUrl: '/ghee.webp',
    title: 'Ghee (200ml)',
    description: 'Discover the purity and authentic taste of Ghee (200ml) from Pura Company, ideal for cooking and medicinal purposes.',
    price: 'Rs.160.00'
  },
  {
    id: 5,
    color:"gray",
    imageUrl: '/ghee.webp',
    title: 'Ghee (500ml)',
    description: 'Bring home the traditional Ghee (500ml) by Pura Company, perfect for enriching your dishes with its rich flavor and aroma.',
    price: 'Rs.380.00'
  },
  {
    id: 6,
    color:"gray",
    imageUrl: '/ghee.webp',
    title: 'Ghee (1Lt)',
    description: 'Elevate your culinary creations with Pura Company\'s Ghee (1Lt), offering a premium quality that enhances any recipe.',
    price: 'Rs.760.00'
  },
];



const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <ProductGallery product={sampleProduct} />
      <h1 className="text-4xl font-extrabold px-[100px]">Other Products</h1>

      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
          {products.map(product => (
            <Link key={product.id}  href ={`/products/${product.id}`}  passHref>
            <Product key={product.id} product={product} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
