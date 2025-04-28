import React from "react";

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { reviewId, productId } = await params;
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
};

export default ProductReview;
