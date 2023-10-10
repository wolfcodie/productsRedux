import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rdx/slices/Product-slice";
import Product from "./Product";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="products_section">
      <h2>Best Products</h2>
      <div className="Products flex">
        {products.slice(0, 4).map((product) => (
          <motion.div
            key={product.id}
            initial="hidden"
            animate="visible"
            variants={productAnimation}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Product product={product} />
          </motion.div>
        ))}
      </div>

      <Link className="btn" to="/Products">
        See All Products
      </Link>
    </section>
  );
}

export default Products;
