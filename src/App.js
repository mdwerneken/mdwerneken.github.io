import logo from './images/gangsta.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        
        <h1>Whoopsie!</h1>
      </header>
      <p>Wait, you must be looking for <a color="NavyBlue" href="/jade-practice-proj/">My JADE Practice Project!</a></p>
    </div>
  );
}

export default App;
