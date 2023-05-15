import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route} from'react-router-dom';
import './App.css';
import Home from './component/pages/Home';
import Articles from './component/pages/Articles';
import Quotes from './component/pages/Quotes';
import SignUp from './component/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={ <Home/>} />
            <Route path='/articles' exact element={ <Articles/>} />
            <Route path='/quotes' exact element={ <Quotes/>} />
            <Route path='/sign-up' exact element={ <SignUp/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
