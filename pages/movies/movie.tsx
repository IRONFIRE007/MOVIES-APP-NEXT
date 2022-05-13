import React from 'react'
import { Provider} from 'react-redux';
import { Movie } from '../../src';
import { Layout } from '../../src/layouts/ui';


import { store } from "../../src/store/store";

const movie = () => {
    

  return (
    <Provider store={store}>
       <Layout children={<Movie/> } title="Movie"/>
    </Provider>
  )
}

export default movie