import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Privacy from "./pages/privacy/privacy";
import Career from "./pages/career/career";
import Terms from "./pages/terms/terms";
import Blog from "./pages/blog/blog";
import Faqs from "./pages/faqs/faqs";
import About from "./pages/about/about";
import Contact from "./pages/contactus/contact";
import BlogDetail from "./pages/blog/blogDetail";
import Return from "./pages/return/return";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import Product from "./pages/product/Product";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Checkout from "./pages/checkout/Checkout";
import Artist from "./pages/artist/Artist.page";
import EditProfile from "./pages/EditProfile/EditProfile";
import ForgotPassword from "./pages/forgetPassword/ForgetPassword";
import ConfirmEmail from "./pages/Confirm_email/Confirm_email";
import Category from "./pages/Category/Category";
import Wishlist from "./pages/wishlist/Wishlist.page";
import MyBids from "./pages/mybids/MyBids.page";
import Order from "./pages/order/Order.page";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import SingleOrder from "./pages/SingleOrder/SingleOrder.page";

function App() {
  const dispatch = useDispatch();
  // handle what happens on key press
  const handleKeyPress = useCallback((event) => {
    if (event.altKey && (event.key === "s" || event.key === "S")) {
      dispatch({ type: "SEARCH" });
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Product />} />
          <Route path="/search" element={<Product />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/privacypolicies" element={<Privacy />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/termsandconditions" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/returnsandrefunds" element={<Return />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route
            path="/users/resetPassword/:id/:token"
            element={<ForgotPassword />}
          />
          <Route path="/orders/:id" element={<SingleOrder />} />
          <Route path="/auth/confirm/:token" element={<ConfirmEmail />} />
          <Route path="/mybids" element={<MyBids />} />
          <Route path="/orders" element={<Order />} />
          <Route element={<h1>hello</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
