import { MovieFull } from "./movieInterface";

export interface State {
    state :{
      loading: boolean;
      darkTheme:boolean;
      moviesnowPlaying:[];
      moviesPopular:[];
      moviesUpComing:[];
      moviesTopRated:[];
      activeMovie:MovieFull;
    } 
  }

