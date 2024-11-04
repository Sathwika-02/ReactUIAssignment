import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Orders from './pages/Home/Orders/Orders';
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';
import "./style/dark.scss"
function App() {
  const {darkMode}=useContext(DarkModeContext);
  return (
    <div className={darkMode?"app dark":"dark"}>
        <Router>
     <Routes>
      <Route path="/">
      <Route path='/home' element={<Home/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route index element={<Home/>}/>
      </Route>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
