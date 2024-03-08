import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="header__logo" src="logo.png" alt="LogoDTM" />
      <Login />
      </header>
    </div>
  );
}

export default App;
