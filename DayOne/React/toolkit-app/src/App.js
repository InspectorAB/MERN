import './App.css';
import AuthApp from './components/AuthApp';
import CounterApp from './components/CounterApp';

function App() {
  return (
    <div className="App">
      <CounterApp/>
      <hr></hr>
      <AuthApp/>
    </div>
  );
}

export default App;
