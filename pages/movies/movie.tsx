import React from "react";
import { Movie } from "../../src";
import { Layout } from "../../src/layouts/ui";

const movie = () => {
  return <Layout children={<Movie />} title="Movie" />;
};

export default movie;
