// pages/index.js
import React from 'react';
import Product from '../../components/products/productShow';
import Navbar from '@/components/navrbar';
const products = [
  {
    id: 1,
    color: 'purple',
    imageUrl: 'https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1',
    title: 'Soft Plushy Cushion Chair 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!',
    price: '$29.99'
  },
  {
    id: 2,
    color: 'purple',
    imageUrl: 'https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1',
    title: 'Soft Plushy Cushion Chair 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!',
    price: '$29.99'
  },
  {
    id: 3,
    color: 'purple',
    imageUrl: 'https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1',
    title: 'Soft Plushy Cushion Chair 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!',
    price: '$29.99'
  },
  {
    id: 4,
    color: 'purple',
    imageUrl: 'https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1',
    title: 'Soft Plushy Cushion Chair 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!',
    price: '$29.99'
  },
  {
    id: 5,
    color: 'purple',
    imageUrl: 'https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1',
    title: 'Soft Plushy Cushion Chair 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!',
    price: '$29.99'
  }
];


export default function HomePage() {
  return (
    <>
    <Navbar/>
      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

// // src/App.tsx
// import React from 'react';
// import ProductGallery from '@/components/products/productGallery';
// interface ProductType {
//     id: number;
//     title: string;
//     description: string;
//     price: string;
//     images: string[]; // Array of image URLs
//   }

// const product: ProductType = {
//   id: 1,
//   title: 'Multi-Image Product',
//   description: 'A great product with multiple views.',
//   price: '$49.99',
//   images: [
//     'https://havepura.com/wp-content/uploads/2023/07/Chocolate-Milk.png',
//     'https://havepura.com/wp-content/uploads/2023/07/Chocolate-Milk.png',
//     'https://havepura.com/wp-content/uploads/2023/07/Chocolate-Milk.png',
//   ],
// };

// function App() {
//   return (
//     <div className="App">
//       <ProductGallery product={product} />
//     </div>
//   );
// }

// export default App;
