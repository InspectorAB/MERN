import './App.css';
import {appRoutes} from './routes';
import {useRoutes} from 'react-router-dom';

function App() {
  const element = useRoutes(appRoutes);
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
