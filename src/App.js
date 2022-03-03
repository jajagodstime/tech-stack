// import './App.scss';
import {BrowserRouter as Router,  Route, Routes,   } from 'react-router-dom';

import Main from './components/Main';
import CreatePage from "./pages/Create";
import HomePage from "./pages/Home";
import LearnPage from "./pages/Learn";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import MemberPage from "./pages/Membership";


import NotFoundPage from '../src/components/NotFound/404';

// create our App


function App() {
  

  return (
  
    <div >
  
    <Router>
      <Main/>
        <Routes>
        <Route path="/" element={ <HomePage /> }  />
       <Route  path="/Learn" element={<LearnPage />} />
        <Route  path="/contact" element={<ContactPage />} />
        <Route  path="/Create" element={< CreatePage />} />
         <Route  path="/about" element={<AboutPage />} />
        <Route  path="/Membership" element={< MemberPage />} />
        <Route path="*" element={ <NotFoundPage />}/>
        </Routes>
        </Router>   
    </div >
  );
}

export default App;


// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Body from "./components/Body";
// import Header from "./components/Header";


// function App() {
//   return (
//     <div className="main">
//    
//  <Body/>
//     </div>
//   );
// }

