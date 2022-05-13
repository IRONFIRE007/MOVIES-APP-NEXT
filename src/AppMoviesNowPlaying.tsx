import { MoviesNowPlaying } from "./components";
import { Layout } from "./layouts/ui";

export const AppMoviesNowPlaying = () => {
  return <Layout title="Populars Movies" children={<MoviesNowPlaying />} />;
};
