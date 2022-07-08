import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar2 from './view/Sidebar2';
import Sidebar3 from './view/Sidebar3';
import Sidebar4 from './view/Sidebar4';
import Customers from './view/Customer/Customers';



const Login = React.lazy(() => import('./view/Auth/Login'));
const Dashboard = React.lazy(() => import('./view/Dashboard'));
const IndexLayoutd = React.lazy(() => import('./components/Dashboard'));
const NotFound = React.lazy(() => import('./view/NotFound'));
const Sidebar1 = React.lazy(() => import('./view/Sidebar'));
const Setting = React.lazy(() => import('./view/setting'));

const loading = () => <div className="text-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>

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
          <Route path="customers" name="List of Customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
