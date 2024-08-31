import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <link href="./output.css" rel="stylesheet"></link>
      <header className = "App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 class="text-3xl font-bold underline">WaxFinder</h1>
      <button>Find</button>
      </header>
    </div>
  );
}

export default App;
