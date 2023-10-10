import React from "react";
import shapes from "../assets/shapes.png";
import ChartComponent from "./ChartComponent";
import { motion } from "framer-motion";

function Satats() {
  const initialData = [
    { time: "2018-12-22", value: 32.51 },
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: 22.67 },
  ];

  return (
    <section className="stats flex">
      <div className="stats-left flex">
        <article>
          <h4>
            {Array.from("Product Mastery").map((char, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                {char}
              </motion.span>
            ))}
          </h4>

          <h2>
            {Array.from("Your Gateway into Products").map((char, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: index * 0.01, duration: 0.5 }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <button className="btn">Learn More</button>
        </article>
        <img src={shapes} alt="shapes" />
      </div>
      <div className="stats-right">
        <h2>Products</h2>
        <ChartComponent data={initialData}></ChartComponent>
      </div>
    </section>
  );
}

export default Satats;
