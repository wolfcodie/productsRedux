import React, { useState } from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import Filter from "../components/Filter";

function ProductsPage() {
  const products = useSelector((state) => state.products);
  const [filters, setFilters] = useState({
    ctg: "all",
    min: 0,
    max: Infinity,
  });
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [load, setload] = useState(false);
  const hadelFilter = (e) => {
    e.preventDefault();
    setload(true);
    const filttered = products.filter((product) => {
      if (filters.ctg === "all") {
        if (filters.min < product.price && filters.max > product.price) {
          return product;
        }
      } else if (filters.ctg === product.category) {
        if (filters.min < product.price && filters.max > product.price) {
          return product;
        }
      }
    });
    setfilteredProducts(filttered);
  };

  return (
    <section className="products_page">
      <Filter
        filters={filters}
        setFilters={setFilters}
        hadelFilter={hadelFilter}
      />
      <div className="Products flex">
        {load
          ? filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })
          : products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
      </div>
    </section>
  );
}

export default ProductsPage;
