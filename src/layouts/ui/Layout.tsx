import Head from "next/head";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme as blackTheme, lightTheme } from "../../../theme";
import { Navbar } from "../ui";
import { State } from "../../../interfaces/state";

interface Props {
  children?: JSX.Element;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  const { darkTheme } = useSelector((state: State) => state.state);
  return (
    <NextUIProvider theme={darkTheme ? blackTheme : lightTheme}>
      <>
        <Head>
          <title>{title || "Movies App"}</title>
          <meta name="description" content="Information of Movies" />
          <meta name="keywords" content="movies,new movies,best movies" />
        </Head>
        <Navbar />

        <main style={{ padding: "0px 20px" }}>{children}</main>
      </>
    </NextUIProvider>
  );
};
