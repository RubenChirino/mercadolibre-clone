import React from "react";
import { useRouter } from "next/router";

// Services
import { useProduct } from "@/services/useProduct";
import Navbar from "@/components/Navbar/Navbar";

// Material UI
import Stack from "@mui/system/Stack";
import Container from "@mui/system/Container";
import Box from "@mui/material/Box";

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { product, isLoading, isError } = useProduct(id as string | undefined);
  console.log("🚀 ~ product", product);

  return (
    <Stack>
      <Box
        className="shadow_sm"
        sx={{
          backgroundColor: "primary.500",
          paddingY: 1,
        }}
        // eslint-disable-next-line react/no-children-prop
        children={
          <Container>
            <Navbar />
          </Container>
        }
      />

      <Container maxWidth="xl" sx={{ paddingY: 0 }}></Container>
    </Stack>
  );
}

export default ProductDetail;
