import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Dashboard from './pages/dashboard';
  
function App() {
return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/dashboard/:id' element={<Dashboard/>} />
        </Routes>
    </Router>
);
}
  
export default App;