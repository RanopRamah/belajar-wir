import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Navbar from './components/navbar';

const App = () => {
const contactText = 'Contact';
function CekClick() {
  return alert('Ya jawa ngomong nya medog gitu anying');
}

  return (
    <div className="App">
      <header className="App-header">
        <Navbar contact={contactText} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       Cek low Seven
       <Button clicked={CekClick}/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
