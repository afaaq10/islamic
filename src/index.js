import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();

// import React from 'react';
// // import Profile from './Profile';
// import ReactDOM from 'react-dom';
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
// import App from './App';

// ReactDOM.render(


//   // <BrowserRouter basename={window.location.pathname || ''}>
//   //   <Routes>
//   //     <Route path="/" element={<App />} />
//   //     <Route path="Profile" element={<Profile />} />

//   //   </Routes>
//   // </BrowserRouter>,

//   <App />,



//   document.getElementById('root')
// );






// import React from 'react';
// import Profile from './Profile';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(


//   <BrowserRouter basename={window.location.pathname || ''}>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="Profile" element={<Profile />} />

//     </Routes>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


