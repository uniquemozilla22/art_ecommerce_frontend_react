import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
