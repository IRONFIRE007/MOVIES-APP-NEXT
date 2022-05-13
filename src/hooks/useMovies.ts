import movieApi from "../../api/movieApi";
import { MovieDBMoviesResponse } from "../../interfaces/movieInterface";

export const useMovies = async (url: string) => {
 return  await movieApi.get<MovieDBMoviesResponse>(`${url}`)
};
