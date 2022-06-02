import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PageContainer from './pages/PageContainer';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Account from './pages/Account';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageContainer />} >
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='/about' element={<About />} />
          {/* Any route inside of here we need a user */}
          <Route element={<ProtectedRoute />}>
             <Route path='/account' element={<Account />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
