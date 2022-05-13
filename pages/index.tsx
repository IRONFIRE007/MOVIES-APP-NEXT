import type { NextPage } from "next";
import { Provider } from "react-redux";
import { AppMoviesNowPlaying } from "../src";
import { store } from "../src/store/store";

const HomePage: NextPage = () => {
  return (
    <>
      <Provider store={store}>
        <AppMoviesNowPlaying />
      </Provider>
    </>
  );
};

export default HomePage;
