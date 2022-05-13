import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTopRated,
  setFinishLoading,
  setStartLoading,
} from "../reducers/mainReducer";
import { State } from "../../interfaces/state";
import { MovieFull } from "../../interfaces/movieInterface";

import { Grid } from "@nextui-org/react";
import { MoviesCard } from "../layouts/ui/MoviesCard";
import { AppDispatch } from "../store/store";

export const MoviesTopRated = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleStartLoading = () => {
    dispatch(setStartLoading());
  };

  const handleFinishLoading = () => {
    dispatch(setFinishLoading());
  };

  useEffect(() => {
    dispatch(getTopRated());
  }, [dispatch]);

  const { moviesTopRated } = useSelector((state: State) => state.state);

  return (
    <>
      <Grid.Container gap={2} justify="center">
        {moviesTopRated.map((movie: MovieFull, i) => (
          <MoviesCard movie={movie} key={movie.id} />
        ))}
      </Grid.Container>
    </>
  );
};
