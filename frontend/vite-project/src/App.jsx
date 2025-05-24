import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import "./App.css";
import AdminUserPage from "./pages/admin/AdminUserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/admin/*">
        <Route path="users" element ={<AdminUserPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
