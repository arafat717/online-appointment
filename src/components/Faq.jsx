"use client";

import React, { useState } from "react";

const Faq = () => {
  const [selected, setSelected] = useState(0);

  const toggleAccordion = (index) => {
    setSelected(index);
  };
  return (
    <div>
      <h1>hello form arafat</h1>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="collapse border-b border-gray-300 bg-base-200"
        >
          <input
            type="radio"
            name="my-accordion"
            className="hidden"
            checked={selected === index}
            onChange={() => toggleAccordion(index)}
          />
          <div
            className="collapse-title text-xl font-medium cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            Click to open this one and close others
          </div>
          <div
            className={`collapse-content p-4 ${
              selected === index ? "block" : "hidden"
            }`}
          >
            <p>hello</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
