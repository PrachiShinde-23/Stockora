import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './index.css';
import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
// import TopBar from './components/TopBar';
// import Menu from './components/Menu';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path="/*" element={<Home/>}/>
    {/* <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/TopBar" element={<TopBar/>}/>
         <Route path="/Menu" element={<Menu/>}/> */}
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);


// reportWebVitals();
