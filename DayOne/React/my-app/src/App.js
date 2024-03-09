import logo from './logo.svg';
import './App.css';
import MainApp from './components/MainApp';
import RestApp from './components/RestApp';
import GetData from './components/GetData';


//const bind = fetct()
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error) )

function App() {
  return (
    <div className="App">
   <p>Hello World</p>
   <MainApp/>
   <RestApp/>
    </div>
  );
}

export default App;
