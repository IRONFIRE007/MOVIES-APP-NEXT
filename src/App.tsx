import { Provider} from 'react-redux';
import store from '../store/store';
import { AppMovies } from './components/AppMovies';

export const App = () => {


  return (
    <Provider store={store}>
     <AppMovies/>
    </Provider>
  )
}


