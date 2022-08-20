import type { NextApiRequest, NextApiResponse } from "next";

// Types
import { Product } from "./types";

// Data
import { PRODUCTS } from "./mock";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | undefined>
) {
  const productID = req.query.id;
  let data: Product | undefined;

  if (req.query.id) {
    // Connect to DB or Mock
    const prd = PRODUCTS.find((item) => item.id === productID);

    res.status(200).json(prd);
  } else {
    res.status(200).json(data);
  }
}
