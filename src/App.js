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

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/career" element={<Career />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/return" element={<Return />} />

          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
