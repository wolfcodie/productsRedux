import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import "./styles/App.css";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Setting from "./pages/Setting";
import TopNav from "./components/TopNav";

function App() {
  return (
    <main className="App flex">
      <Nav />
      <section className="main-section">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Setting" element={<Setting />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
