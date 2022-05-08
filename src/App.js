import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <h1>Lukupay Network Service</h1>

   
      <nav>
        <Link to="kc2-task12-routing/home" >Home</Link> | {" "}
        <Link to="kc2-task12-routing/contact">Contact</Link> | {" "}
        <Link to="kc2-task12-routing/about"> About</Link>
      </nav>
      <Outlet />
    </div>
    
    </>
  );
}

export default App;
