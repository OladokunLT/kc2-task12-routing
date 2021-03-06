import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Dataplan from './routes/Dataplan';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/kc2-task12-routing' element={<App />} >
        <Route path='kc2-task12-routing/Home' element={< Home/>} >
          <Route
            index
              element={
                <main >
                  
                </main>
              }
          />
          <Route path=":dataplanId" element={<Dataplan />} />
        </Route>
        <Route path='kc2-task12-routing/About' element={<About />} />
        <Route path='kc2-task12-routing/Contact' element={<Contact />} />
        <Route 
          path='*'
          element={
            <main>
              <h3> Page not found!</h3>
            </main>
          }
        />
      </Route>
    </Routes> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
