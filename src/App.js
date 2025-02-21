import { BrowserRouter as Router, Route,Routes, Navigate,} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Cart from "./pages/cart/Cart";
import Nopage from "./pages/nopage/Nopage";
import MyState from "./Context/data/MyState";
import Login from "./pages/registration/Login";
import Siginup from "./pages/registration/Siginup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import Allproduct from "./pages/allproducts/Allproduct";
import { toast } from "react-toastify";

function App() {
  return (
    <MyState>
       <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<ProtectedRoutes><Cart/></ProtectedRoutes>}/>
        <Route path="/allproducts" element={<Allproduct/>}/>
        <Route path="/dashboard" element={<ProtectedRoutesForAdmin><Dashboard/></ProtectedRoutesForAdmin>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/siginnup" element={<Siginup/>}/>
        <Route path="/*" element={<Nopage/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>}/>
        <Route path="/Addproduct" element={<AddProduct />}></Route>
        <Route path="/updateproduct" element={
          <UpdateProduct/>}></Route>
      </Routes>
    </Router>
    </MyState>
   
  )
}
export const ProtectedRoutes = ({children}) => {
  if(localStorage.getItem('user')){
    return children
  }else{
    toast.error('You have not login please do login');
    return <Navigate to='/login'/>
  }
}
// export const ProtectedRoutesForAdmin = ({children}) => {
//   const admin = JSON.parse(localStorage.getItem('user'))
//   console.log(admin.user.email)
//   if(admin.user.email==='shalini7217625537@gmail.com'){
//     return children
//   }else{
//     toast.error('You are not Admin');
//     return <Navigate to='/login'/>
//   }
// }
export default App
