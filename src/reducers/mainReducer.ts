import { createSlice } from "@reduxjs/toolkit";
import { MovieFull } from "../../interfaces/movieInterface";
import { useMovies } from "../hooks/useMovies";
import { AppDispatch } from "../store/store";

const mainSlice = createSlice({
  name: "state",
  initialState: {
    loading: false,
    darkTheme: false,
    moviesnowPlaying: [],
    moviesPopular:[],
    moviesTopRated:[],
    moviesUpComing:[],
    activeMovie : null,
  },
  reducers: {
    //Loading  State
    setStartLoading: (state) => {
      state.loading = true;
    },
    setFinishLoading: (state) => {
      state.loading = false;
    },

    //theme State
    setActiveThemeDart: (state) => {
      state.darkTheme = true;
    },
    setDesactiveThemeDart: (state) => {
      state.darkTheme = false;
    },

    //
    setMoviesNowPlaying: (state, action) => {
      state.moviesnowPlaying = action.payload;
    },

    setMoviesPopular:(state, action) => {
      state.moviesPopular = action.payload;
    },


    setMoviestopRated:(state, action) => {
      state.moviesTopRated = action.payload;
    },
    setMoviesUpComing:(state, action) => {
      state.moviesUpComing = action.payload;
    },
    setActiveMovie:(state, action) => {
      state.activeMovie = action.payload;
    }
    
  },
});

export const {
  setStartLoading,
  setFinishLoading,
  setActiveThemeDart,
  setDesactiveThemeDart,
  setMoviesNowPlaying,
  setMoviesPopular,
  setMoviestopRated,
  setMoviesUpComing,
  setActiveMovie
} = mainSlice.actions;

export const getnowPlaying = () => (dispatch: AppDispatch) => {
 const moviesPromises = useMovies('/now_playing');
 moviesPromises.then((response) => {
    console.log(response.data.results);
    dispatch(setMoviesNowPlaying(response.data.results));
  });
};

export  const getpopular = () => (dispatch:AppDispatch) =>{
    const moviesPopularPromise = useMovies('/popular');
    moviesPopularPromise.then((response) =>{
        console.log(response.data.results);
        dispatch(setMoviesPopular(response.data.results));
    })
}


export  const getTopRated= () => (dispatch:AppDispatch) =>{
  const moviesPopularPromise = useMovies('/top_rated');
  moviesPopularPromise.then((response) =>{
      console.log(response.data.results);
      dispatch(setMoviestopRated(response.data.results));
  })
}


export  const getUpcoming= () => (dispatch:AppDispatch) =>{
  const moviesPopularPromise = useMovies('/upcoming');
  moviesPopularPromise.then((response) =>{
      console.log(response.data.results);
      dispatch(setMoviesUpComing(response.data.results));
  })
}


export const setMovie = (movie:MovieFull) =>(dispatch:AppDispatch) =>{
  dispatch( setActiveMovie(movie));
}

export default mainSlice.reducer;
