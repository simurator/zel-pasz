import logo from './logo.svg';
import './App.css';
import tango from './images/tango.jpg'; // <- Dodany import
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <img src={tango} alt="Tango" style={{ width: '300px', borderRadius: '8px' }} />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
