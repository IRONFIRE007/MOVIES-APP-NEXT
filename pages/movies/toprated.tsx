import React from 'react'
import { Provider } from 'react-redux'
import { AppMoviesTopRated } from '../../src'
import { store } from '../../src/store/store'

const toprated = () => {
  return (
    <>
     <Provider store={store}>
     <AppMoviesTopRated/>
     </Provider>
    </>
   
  )
}

export default toprated