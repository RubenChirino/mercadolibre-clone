/* eslint-disable react/no-children-prop */
import React from "react";

// Styles
import styles from "./Navbar.module.css";

// Images
import logo from "@/assets/images/logo.png";

// Components
import Image from "next/image";

// Material UI
import Divider from "@mui/material/Divider";
import Stack from "@mui/system/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Icons
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <Stack>
      <Stack direction="row" spacing={7}>
        <Image
          src={logo}
          alt="MercadoLibre Logo"
          layout="fixed"
          width={134}
          height={34}
          objectFit="contain"
        />

        <Stack
          width="48%"
          sx={{ backgroundColor: "#fff" }}
          maxWidth={600}
          height={39}
          direction="row"
          alignItems="center"
          // justifyContent="space-between"
          divider={<Divider orientation="vertical" variant="middle" flexItem />}
          boxShadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
        >
          <input
            className={`input--unstyled ${styles["search__input"]} `}
            style={{ width: "95%", height: "100%" }}
            placeholder="Buscar productos, marcas y más…"
            type="text"
            name=""
            id=""
          />

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "5%", minWidth: 46, height: "100%" }}
            children={<SearchIcon sx={{ color: "grey.800" }} />}
          />
        </Stack>
      </Stack>
      <Stack direction="row">
        <Typography>Enviar a Buenos Aires</Typography>
      </Stack>
    </Stack>
  );
}

export default Navbar;
