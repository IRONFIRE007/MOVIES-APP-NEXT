import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUpcoming,
  setFinishLoading,
  setStartLoading,
} from "../reducers/mainReducer";
import { State } from "../../interfaces/state";
import { MovieFull } from "../../interfaces/movieInterface";
import { Grid } from "@nextui-org/react";
import { MoviesCard } from "../layouts/ui/MoviesCard";
import { AppDispatch } from "../store/store";

export const MoviesUpComming = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleStartLoading = () => {
    dispatch(setStartLoading());
  };

  const handleFinishLoading = () => {
    dispatch(setFinishLoading());
  };

  useEffect(() => {
    dispatch(getUpcoming());
  }, [dispatch]);

  const { moviesUpComing } = useSelector((state: State) => state.state);

  return (
    <>
      <Grid.Container gap={2} justify="center">
        {moviesUpComing.map((movie: MovieFull, i) => (
          <MoviesCard movie={movie} key={movie.id} />
        ))}
      </Grid.Container>
    </>
  );
};
