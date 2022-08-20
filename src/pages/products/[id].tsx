import React from "react";
import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Product: {id}</div>;
}

export default ProductDetail;
