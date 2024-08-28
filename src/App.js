import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Order from "./pages/Order";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/products" element={<Product/>} />
        <Route path="/dashboard/categories" element={<Category/>} />
        <Route path="/dashboard/orders" element={<Order/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
