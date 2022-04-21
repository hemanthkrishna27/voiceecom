import logo from './logo512.png';
import './App.css';
import { Route, BrowserRouter as Router, NavLink, Routes, Link } from 'react-router-dom'
import Home from './Screens/Home';
import Products from './Screens/Products';
import Search from './Screens/Search';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" exact  element={<Home />} />
        <Route path="/products" exact  element={<Products />} />
        <Route path="/search" exact  element={<Search />} />
      </Routes>

    </Router>
  );
}

export default App;
