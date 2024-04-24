import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Orders from '../pages/Orders/Orders'
import Auth from '../pages/Auth/Auth'
import PrivateRoute from '../components/PrivateRoute'
import MainLayout from '../components/MainLayout'
// import OrdersPage from '../pages/Orders/Orders';

function Router() {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </MainLayout>
  )
}

export default Router