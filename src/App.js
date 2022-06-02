import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PageContainer from './pages/PageContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageContainer />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
