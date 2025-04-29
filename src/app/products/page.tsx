import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>ProductList</h1>
      <h2>
        <Link href="/products/1">Product1</Link>
      </h2>
      <h2>
        <Link href="/products/2"> Product2</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>
          Product3{" "}
        </Link>
      </h2>
    </>
  );
};

export default ProductList;
