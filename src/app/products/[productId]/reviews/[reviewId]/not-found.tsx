"use client";
import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathname = usePathname();

  const path = pathname.split("/");
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <>
      <h2>
        Review {reviewId} not found for product {productId}
      </h2>
      <p>{path}</p>
    </>
  );
};

export default NotFound;
