import { Card, Grid, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { MovieFull } from "../../../interfaces/movieInterface";
import { setMovie } from "../../reducers/mainReducer";
import { AppDispatch } from "../../store/store";

interface Props {
  movie: MovieFull;
}

export const MoviesCard: FC<Props> = ({ movie }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSetMovieActive = () => {
    dispatch(setMovie(movie));
  };

  return (
    <Link href={"/movies/movie"}>
      <Grid xs={3}>
        <Card
          hoverable
          clickable
          className="card"
          onClick={handleSetMovieActive}
        >
          {/* <Card.Header>
                 <h3>{title}</h3>

                    </Card.Header> */}

          <div className="cardImage">
            <Card.Image
              className="imageSlider"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width="85%"
              height="100%"
            />
          </div>
          {/* <Card.Body aria-selected>
                      <div className="contentCard">
                      <h5>Popularity: {vote_average}</h5>
                         <h5>Idioma: {original_language}</h5>
                         <h5>titulo Original : {original_title}</h5>
                      </div>
                </Card.Body> */}

          <Card.Footer className="text">
            <h6>{movie.title}</h6>
          </Card.Footer>
        </Card>
      </Grid>
    </Link>
  );
};
