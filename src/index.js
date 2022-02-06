import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';



const myrouter = (
  <Router>
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/PageOne">PageOne</Link>
        <Link to="/PageTwo">PageTwo</Link>
        <Link to="/PageThree">PageThree</Link>
        <Link to="/PageFour">PageFour</Link>
      </ul>

      <Routes>
      <Route exact path="/" element={<App/>} />
      <Route path="PageOne" element={<PageOne/>} />
      <Route path="PageTwo" element={<PageTwo/>} />
      <Route path="PageThree" element={<PageThree/>} />
      <Route path="PageFour" element={<PageFour/>} />
      </Routes>

      

    </div>
  </Router>
)

ReactDOM.render(myrouter,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
