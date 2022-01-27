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

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Product />} />
          <Route path="/privacypolicies" element={<Privacy />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/termsandconditions" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/returnsandrefunds" element={<Return />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
