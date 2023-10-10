import React from "react";

import "../styles/Home.css";
import Satats from "../components/Satats";
import Products from "../components/Products";

function Home() {
  return (
    <section className="home-page">
      <Satats />
      <br />
      <br />
      <hr />
      <Products />
    </section>
  );
}

export default Home;
