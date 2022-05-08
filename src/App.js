import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <h1>Lukupay Network Service</h1>
      <nav>
        <Link to="/home" >Home</Link> | {" "}
        <Link to="/contact">Contact</Link> | {" "}
        <Link to="/about"> About</Link>
      </nav>
      <Outlet />
    </div>
    
    </>
  );
}

export default App;
