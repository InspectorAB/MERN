import './App.css';
import HomePage from './Components/HomePage';
import {appRoutes} from './routes';
import {useRoutes} from 'react-router-dom';

function App() {
  const element = useRoutes(appRoutes);
  return (
    <div className="App">
      <HomePage/>
      {element}
    </div>
  );
}

export default App;
