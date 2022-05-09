import React from "react";
import { Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setFinishLoading, setStartLoading } from "../../reducers/mainReducer";


interface State {
    state :{loading: boolean} 
  }


export const AppMovies = () => {
  const dispatch = useDispatch();

  const handleStartLoading = () => {
    dispatch(setStartLoading());
  };

  const handleFinishLoading = () => {
    dispatch(setFinishLoading());
  };

  const {loading} = useSelector((state: State) => state.state)

  
  return (
    <div>
        <h1>Hello World</h1>
    </div>
  );
};
