import React from 'react'
import { Provider } from 'react-redux'
import { AppMoviesUpComing } from '../../src'
import { store } from '../../src/store/store'

const upcoming = () => {
  return (
    <>
      <Provider store={store}>
      <AppMoviesUpComing/>
      </Provider>
    </>
 
  )
}

export default upcoming