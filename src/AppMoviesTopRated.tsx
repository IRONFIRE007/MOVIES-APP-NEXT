import React from "react";
import { MoviesTopRated } from "./components";
import { Layout } from "./layouts/ui";

export const AppMoviesTopRated = () => {
  return <Layout title="Populars Movies" children={<MoviesTopRated />} />;
};
