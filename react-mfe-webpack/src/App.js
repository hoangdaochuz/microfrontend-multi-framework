import React from "react";
export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>React MFE</h1>
      <div style={{ width: 100, height: 100 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="-10.5 -9.45 21 18.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"
        >
          <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
          <g stroke="currentColor" stroke-width="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
      </div>
    </div>
  );
}
