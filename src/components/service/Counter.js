import React, { useState, useEffect } from "react";
import "./Counter.css";

function Count() {
  // State to manage the counter values
  const [counters, setCounters] = useState([
    { label: "User Visited", value: 1 },
    { label: "All mandi", value: 1 },
    { label: "Selling Products", value: 1 },
    { label: "Farmers", value: 1 },
    { label: "All Viewer", value: 1 },
  ]);

  // Function to increase the number displayed in the counter
  const increaseCounter = (index) => {
    setCounters((prevCounters) => {
      const updatedCounters = [...prevCounters];
      if (updatedCounters[index].value < 100) {
        updatedCounters[index].value++;
      }
      return updatedCounters;
    });
  };

  // Update the counters every second
  useEffect(() => {
    const interval = setInterval(() => {
      counters.forEach((counter, index) => {
        increaseCounter(index);
      });
    }, 100);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [counters]);

  return (
    <div className="App">
      <section className="section section-work-data">
        <div className="count">
          {counters.map((counter, index) => (
            <div key={index} className="abc">
              <h2 className="counter-numbers">{counter.value}+</h2>
              <p>{counter.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Count;
