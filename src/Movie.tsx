import { Card, NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../interfaces/state";


export const Movie = () => {
  const { activeMovie  } = useSelector((state: State) => state.state);

  return (
    <>
        {activeMovie && (
          <div className="movieContainer">
            <div className="contentMovie">
              <div className="imageCotainer">
                <Image
                  className="imageMovie"
                  src={`https://image.tmdb.org/t/p/w500${activeMovie.backdrop_path}`}
                  layout="fill"
                  height={500}
                  width={500}
                  id="backgroundImage"
                  objectFit="cover"
                />
              </div>
              <div className="textContainer">
                <h1>Calificacion : {activeMovie.vote_average}</h1>
                <h3>Fecha de lanzamiento : {activeMovie.release_date}</h3>
                <h3>Votos : {activeMovie.vote_count}</h3>
                <p>{activeMovie.overview}</p>
              </div>
            </div>
          </div>
        )}
    </>
  );
};
