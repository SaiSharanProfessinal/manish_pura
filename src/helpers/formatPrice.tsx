import React from 'react';

// Define a type for the component props
type FormatPriceProps = {
  price: number;
};

const FormatPrice: React.FC<FormatPriceProps> = ({ price }) => {
  return (
    <span>
      {Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
      }).format(price / 100)}
    </span>
  );
};

export default FormatPrice;
