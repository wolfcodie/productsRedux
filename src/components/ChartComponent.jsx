import { ColorType, createChart } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

function ChartComponent() {
  const chart_container = useRef();

  useEffect(() => {
    const initialData = [
      { time: "2023-05-10", value: 11 },
      { time: "2023-05-11", value: 13 },
      { time: "2023-05-12", value: 13 },
      { time: "2023-05-13", value: 8 },
      { time: "2023-05-14", value: 13 },
      { time: "2023-05-15", value: 27 },
      { time: "2023-05-16", value: 22 },
      { time: "2023-05-17", value: 27 },
      { time: "2023-05-18", value: 14 },
      { time: "2023-05-19", value: 13 },
      { time: "2023-05-20", value: 27 },
      { time: "2023-05-21", value: 22 },
      { time: "2023-05-22", value: 27 },
      { time: "2023-05-23", value: 27 },
      { time: "2023-05-24", value: 27 },
      { time: "2023-05-25", value: 22 },
      { time: "2023-05-26", value: 22 },
      { time: "2023-05-27", value: 22 },
      { time: "2023-05-28", value: 12 },
      { time: "2023-05-29", value: 13 },
      { time: "2023-05-30", value: 13 },
      { time: "2023-05-31", value: 19 },
      { time: "2023-06-01", value: 23 },
      { time: "2023-06-02", value: 22 },
      { time: "2023-06-03", value: 32 },
      { time: "2023-06-04", value: 35 },
      { time: "2023-06-05", value: 14 },
      { time: "2023-06-06", value: 14 },
      { time: "2023-06-07", value: 12 },
      { time: "2023-06-08", value: 22 },
      { time: "2023-06-09", value: 12 },
      { time: "2023-06-10", value: 19 },
      { time: "2023-06-11", value: 12 },
      { time: "2023-06-12", value: 19 },
      { time: "2023-06-13", value: 12 },
      { time: "2023-06-14", value: 13 },
      { time: "2023-06-15", value: 13 },
      { time: "2023-06-16", value: 12 },
      { time: "2023-06-17", value: 13 },
      { time: "2023-06-18", value: 11 },
      { time: "2023-06-19", value: 9 },
      { time: "2023-06-20", value: 24 },
      { time: "2023-06-21", value: 12 },
      { time: "2023-06-22", value: 22 },
      { time: "2023-06-23", value: 24 },
      { time: "2023-06-24", value: 31 },
      { time: "2023-06-25", value: 12 },
      { time: "2023-06-26", value: 33 },
      { time: "2023-06-27", value: 12 },
      { time: "2023-06-28", value: 12 },
      { time: "2023-06-30", value: 13 },
      { time: "2023-07-01", value: 24 },
      { time: "2023-07-02", value: 24 },

      { time: "2023-07-03", value: 13 },
      { time: "2023-07-04", value: 13 },
      { time: "2023-07-05", value: 24 },
      { time: "2023-07-06", value: 33 },
      { time: "2023-07-07", value: 24 },
      { time: "2023-07-08", value: 24 },
      { time: "2023-07-09", value: 24 },
      { time: "2023-07-10", value: 11 },

      { time: "2023-07-11", value: 13 },
      { time: "2023-07-12", value: 22 },
      { time: "2023-07-13", value: 32 },
      { time: "2023-07-14", value: 34 },
      { time: "2023-07-15", value: 34 },
      { time: "2023-07-16", value: 31 },
      { time: "2023-07-17", value: 22 },
      { time: "2023-07-18", value: 23 },
      { time: "2023-07-19", value: 23 },
      { time: "2023-07-20", value: 31 },
    ];
    const chart = createChart(chart_container.current, {
      layout: {
        textColor: "white",
        background: { type: ColorType.solid, color: "transparent" },
        leftPriceScale: {
          visible: true, // Show the left price scale
          borderColor: "#BB7FF5 ",
        },
      },
      width: chart_container.current.clientWidth,
      height: 230,
      grid: {
        vertLines: false,
        horzLines: false,
      },
      leftPriceScale: {
        visible: true, // Show the left price scale
        borderColor: "#808080",
      },
      rightPriceScale: {
        visible: false, // Show the left price scale
        borderColor: false,
      },
      overlayPriceScales: true, // Keep the price scales fixed on the left side

      //   overlayPriceScales: true,
      //   leftPriceScale: true,
    });

    const newSeries = chart.addAreaSeries({
      lineColor: "#457B85",
      topColor: "#3c354a",
      bottomColor: "#EA755D",
    });
    newSeries.setData(initialData);
    chart.timeScale().fitContent();
    return () => {
      chart.remove();
    };
  }, []);

  return (
    <section className="Volume staking_chart_container">
      <div ref={chart_container} className="tv-lightweight-charts "></div>
    </section>
  );
}

export default ChartComponent;
