import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Filter({ setFilters, filters, hadelFilter }) {
  const products = useSelector((state) => state.products);
  const [min, setMin] = useState("0");
  const [max, setMax] = useState(Infinity);
  const [ctg, setctg] = useState("all");
  const options = products.reduce((acc, product) => {
    if (!acc.includes(product.category)) {
      acc.push(product.category);
    }
    return acc;
  }, []);
  //funtions
  useEffect(() => {
    if (min === "") {
      setMin("0");
    } else if (max === "") {
      setMax(Infinity);
    } else {
      setFilters({ ctg: ctg, min: min, max: max });
    }
  }, [min, max, ctg]);

  return (
    <div className="filter flex">
      <h2>{filters.ctg} Products</h2>
      <form onSubmit={hadelFilter}>
        <select
          name="filter_ctg"
          className="filter_ctg"
          onChange={(e) => setctg(e.target.value)}
        >
          <option value="all">all</option>
          {options &&
            options.map((op) => {
              return (
                <option value={op} key={op}>
                  {op}
                </option>
              );
            })}
        </select>
        <input
          placeholder="min"
          type="number"
          className="filter_price"
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="max"
          type="number"
          className="filter_price"
          onChange={(e) => setMax(e.target.value)}
        />
        <button onClick={hadelFilter} className="btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default Filter;
