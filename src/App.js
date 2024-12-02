import { BrowserRouter as Router, Route,Routes,} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Cart from "./pages/cart/Cart";
import Nopage from "./pages/nopage/Nopage";
import MyState from "./Context/data/MyState";
function App() {
  return (
    <MyState>
       <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/*" element={<Nopage/>}/>
      </Routes>
    </Router>
    </MyState>
   
  )
}

export default App