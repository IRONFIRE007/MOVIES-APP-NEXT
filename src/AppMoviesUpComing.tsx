import React from "react";
import { MoviesUpComming } from "./components";
import { Layout } from "./layouts/ui";

export const AppMoviesUpComing = () => {
  return <Layout title="Populars Movies" children={<MoviesUpComming />} />;
};
