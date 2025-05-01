import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading product details");
  }
  return (
    <div className="p-8 bg-amber-100">
      {children}
      <h1>ProductDetailsLayout</h1>
    </div>
  );
};

export default ProductDetailsLayout;
