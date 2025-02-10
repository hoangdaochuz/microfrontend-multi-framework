import ReactDOM from "react-dom/client";
import React from "react";
import App from "./src/App";
class AppReact2Mfe extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" }); // Shadow DOM to encapsulate styles
  }

  connectedCallback() {
    // Create a mount point inside the shadow DOM
    const mountPoint = document.createElement("div");
    this.root.appendChild(mountPoint);

    // Render React inside the custom element
    this.reactRoot = ReactDOM.createRoot(mountPoint);
    this.reactRoot.render(<App />);
  }

  disconnectedCallback() {
    // Cleanup when the element is removed
    this.reactRoot.unmount();
  }
}

customElements.define("react2-element", AppReact2Mfe);
