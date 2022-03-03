// import './App.scss';
import {BrowserRouter as Router,  Route, Routes,   } from 'react-router-dom';

import Main from './components/Main';
import CreatePage from "./pages/Create";
import HomePage from "./pages/Home";
import AboutPage from "./pages/Learn";
import ContactPage from "./pages/contact";
import MemberPage from "./pages/Membership";


import NotFoundPage from './pages/404';

// create our App


function App() {
  let [responseData, setResponseData] = React.useState('');

  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://quotes15.p.rapidapi.com/quotes/random/",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }, "params": {
        "language_code": "en"
      }
    })
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  // const responseData, setResponseData = React.useState('');

  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://quotes15.p.rapidapi.com/quotes/random/",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }, "params": {
        "language_code": "en"
      }
    })
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])


  return (
  
    <div >
    <header className="App-header">
    <h1>
      Fetching Data with React Hooks
    </h1>
    <button type='button' onClick={fetchData}>Click for Data</button>
  </header>
  <main>
    {responseData &&
      <blockquote>
        "{responseData && responseData.content}"
        <small>{responseData && responseData.originator && responseData.originator.name}</small>
      </blockquote>
    }
    </main>
  {/* <pre>
    <code>
      {responseData && JSON.stringify(responseData, null, 4)}
    </code>
  </pre> */}
    <Router>
      <Main/>
        <Routes>
        <Route path="/" element={ <HomePage /> }  />
       <Route  path="/about" element={<AboutPage />} />
        <Route  path="/contact" element={<ContactPage />} />
        <Route  path="/Create" element={< CreatePage />} />
        <Route path="*" element={ <NotFoundPage />}/>
        <Route  path="/Membership" element={< MemberPage />} />
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

