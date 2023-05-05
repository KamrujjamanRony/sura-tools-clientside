import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/LogIn/SignUp';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/LogIn/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/LogIn/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Payment from './Pages/Dashboard/Payment';
import Tools from './Pages/Tools/Tools';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tools" element={<Tools/>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="tools/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="my-order" element={<MyOrder/>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="make-admin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="add-product" element={
            <RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>}>
          </Route>
          <Route path="manage-orders" element={<ManageOrders/>}></Route>
          <Route path="manage-products" element={<ManageProducts/>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>  
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
