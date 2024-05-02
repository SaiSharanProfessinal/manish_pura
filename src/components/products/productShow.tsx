import React from 'react';

export interface ProductType {
  id: number;
  color: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  // Define a method to handle dynamic background colors more safely
  const bgColor = `bg-${product.color}-100`; 
  const buttonBgColor = `bg-${product.color}-500`;
  const buttonHoverBgColor = `bg-${product.color}-600`;
  const style = {
    backgroundColor: product.color,  // Use the color directly
  };
  return (
    <div className={`p-5 py-10 text-center transform duration-500 hover:-translate-y-2 cursor-pointer ${bgColor}`}>
      <img src={product.imageUrl} alt={product.title} className="mx-auto" style={{ height: '200px', objectFit: 'cover' }} />
      <div className="space-x-1 flex justify-center mt-10">
        {/* Example of stars, normally you would generate these based on product rating */}
        {Array.from({ length: 5 }, (_, index) => (
          <svg key={index} className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <path d="M6.43 12l-2.36 1.64a1 1 0 01-1.53-1.11l.83-2.75a1 1 0 00-.35-1.09L.73 6.96a1 1 0 01.59-1.8l2.87-.06a1 1 0 00.92-.67l.95-2.71a1 1 0 011.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 01.59 1.8l-2.3 1.73a1 1 0 00-.34 1.09l.83 2.75a1 1 0 01-1.53 1.1L7.57 12a1 1 0 00-1.14 0z"></path>
          </svg>
        ))}
      </div>
      <h1 className="text-3xl my-5">{product.title}</h1>
      <p className="mb-5">{product.description}</p>
      <h2 className="font-semibold mb-5">{product.price}</h2>
      <button className={`p-2 px-6 text-white rounded-md ${buttonBgColor} hover:${buttonHoverBgColor}`}>Add To Cart</button>
    </div>
  );
};

export default Product;
