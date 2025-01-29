import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";

import AdminLayout from "./components/admin-view/Layout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/admin-view/dashboard";
import Products from "./pages/admin-view/products";
import Orders from "./pages/admin-view/orders";
import Features from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/Layout";
import Account from "./pages/shopping-view/account";
import Checkout from "./pages/shopping-view/checkout";
import Home from "./pages/shopping-view/home";
import Listing from "./pages/shopping-view/listing";
import NotFound from "./pages/not-found/NotFound";
import CheckAuth from "./components/common/check-auth";

export default function App() {
  const isAuthenticated = false;
  const user = {
    name: "Hari",
    role: "admin",
  };
  return (
    <div>
      <h1>This is the Header</h1>

      <BrowserRouter>
        <Routes>
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </CheckAuth>
            }
          >
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="feaures" element={<Features />} />
          </Route>
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout />
              </CheckAuth>
            }
          >
            <Route path="account" element={<Account />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="home" element={<Home />} />
            <Route path="listing" element={<Listing />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
