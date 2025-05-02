import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import DashboardProfile from './pages/DashboardProfile';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Routes>
      {/*Público*/}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/*Privado*/}
      <Route element={<PrivateRoute />}>
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
