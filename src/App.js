import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import RootLayout from './components/layouts';
import { store } from './store/store';

const App = () => {
  return (
   <Provider store={store}>
      <Router>
        <RootLayout />
      </Router>
   </Provider>
  );
}

export default App;
