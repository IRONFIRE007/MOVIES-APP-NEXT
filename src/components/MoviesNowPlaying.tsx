import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getnowPlaying,
  getpopular,
  setFinishLoading,
  setStartLoading,
} from "../reducers/mainReducer";
import { State } from "../../interfaces/state";
import { MovieFull } from "../../interfaces/movieInterface";

import { Grid } from "@nextui-org/react";
import { MoviesCard } from "../layouts/ui/MoviesCard";
import { AppDispatch } from "../store/store";
import Carousel from "nuka-carousel";
import Image from "next/image";

export const MoviesNowPlaying = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleStartLoading = () => {
    dispatch(setStartLoading());
  };

  const handleFinishLoading = () => {
    dispatch(setFinishLoading());
  };

  useEffect(() => {
    dispatch(getnowPlaying());
    dispatch(getpopular());
  }, [dispatch]);

  const { moviesnowPlaying, loading, moviesPopular } = useSelector(
    (state: State) => state.state
  );

  return (
    <>
      <Carousel
        wrapAround={true}
        animation="fade"
        style={{ marginRight: "20px" }}
        slidesToShow={3}
        className="carrusel"
        autoplay={true}
        withoutControls={false}
        dragging={true}
        scrollMode="page"
      >
        {moviesPopular.map((movie: MovieFull, i) => (
          <Image
            className="imageMovie"
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            width={500}
            height={350}
          />
        ))}
      </Carousel>

      <Grid.Container gap={2} justify="center">
        {moviesnowPlaying.map((movie: MovieFull, i) => (
          <MoviesCard movie={movie} key={movie.id} />
        ))}
      </Grid.Container>
    </>
  );
};
