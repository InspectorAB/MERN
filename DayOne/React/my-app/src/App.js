import logo from './logo.svg';
import './App.css';
import MainApp from './components/MainApp';

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
    </div>
  );
}

export default App;
