import React from "react";

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8 bg-amber-100">
      {children}
      <h1>ProductDetailsLayout</h1>
    </div>
  );
};

export default ProductDetailsLayout;
