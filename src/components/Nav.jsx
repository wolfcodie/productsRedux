import React, { useEffect, useState } from "react";
import "../styles/nav.css";
import Logo from "../assets/logo.png";
import Home from "../assets/Home.png";
import Products from "../assets/products.png";
import cart from "../assets/cart.png";
import setting from "../assets/setting.png";
import { Link } from "react-router-dom";

function Nav() {
  const [page, setPage] = useState("home");

  return (
    <nav className="navbar">
      <Link to="/" onClick={() => setPage("home")} className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className="links">
        <Link
          onClick={() => setPage("home")}
          to="/"
          className={page === "" ? "active" : undefined}
        >
          <img src={Home} alt="home" />
        </Link>
        <Link
          onClick={() => setPage("products")}
          to="/Products"
          className={page === "products" ? "active" : undefined}
        >
          <img src={Products} alt="product" />
        </Link>
        <Link
          onClick={() => setPage("cart")}
          to="/Cart"
          className={page === "cart" ? "active" : undefined}
        >
          <img src={cart} alt="cart" />
        </Link>
        <Link
          onClick={() => setPage("setting")}
          to="/Setting"
          className={page === "setting" ? "active" : undefined}
        >
          <img src={setting} alt="setting" />
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
