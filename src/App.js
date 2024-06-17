import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Albums from './components/albums/albums';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/albums'  element={<Albums />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;