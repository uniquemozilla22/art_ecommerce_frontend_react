import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Privacy from "./pages/privacy/privacy";
import Career from "./pages/career/career";
import Terms from "./pages/terms/terms";
import Blog from "./pages/blog/blog";

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

        </Routes>
      </Layout>
    </div>
  );
}

export default App;
