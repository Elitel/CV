import logo from './logo.svg';
import './App.css';
import Bar from './components/Bar/Bar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ссылка
        </a>
        <Bar color = "#121212" backgroundColor = "red" percent = {80}/>
        <Bar color = "#345678" backgroundColor = "white" percent = {100}/>
      </header>
    </div>
  );
}

export default App;
