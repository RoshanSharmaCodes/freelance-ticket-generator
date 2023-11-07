import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './Layout/Dashboard/Dashboard';
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Dashboard/>
    </div>
    </Provider>
  );
}

export default App;
