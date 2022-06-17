import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './view/Auth/Login';
import IndexLayoutd from './components/Dashboard';
import Sidebar1 from './view/Sidebar';
import Sidebar2 from './view/Sidebar2';
import Sidebar3 from './view/Sidebar3';
import Sidebar4 from './view/Sidebar4';
import Dashboard from './view/Dashboard';
import Setting from './view/setting';
import NotFound from './view/NotFound';

const loading = () => <div className="pt-3 text-center">Loading...</div>

function App() {
  return (
    <React.Suspense fallback={loading()} >
      <Routes>
        <Route path="/login" name="Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" name="dashboard" element={<IndexLayoutd />} /> {/*this route default route*/}
        <Route path="dashboard" name="dashboard" element={<IndexLayoutd />} >
          <Route path="/dashboard" name="dashboard" element={<Dashboard />} />
          <Route path="sidebar1" name="dashboard" element={<Sidebar1 />} />
          <Route path="sidebar2" name="dashboard" element={<Sidebar2 />} />
          <Route path="sidebar3" name="dashboard" element={<Sidebar3 />} />
          <Route path="sidebar4" name="dashboard" element={<Sidebar4 />} />
          <Route path="setting" name="dashboard" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
