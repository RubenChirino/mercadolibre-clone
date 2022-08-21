import React from "react";
import { useRouter } from "next/router";

// Services
import { useProduct } from "@/services/useProduct";

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { product, isLoading, isError } = useProduct(id as string | undefined);
  console.log("🚀 ~ product", product);

  return <div>Product: {id}</div>;
}

export default ProductDetail;
