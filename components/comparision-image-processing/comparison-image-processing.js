new gridjs.Grid({
  columns: [
    { name: "", width: "200px" },
    { name: "On-board Image Processing", width: "250px" },
    { name: "Off-board Image Processing", width: "250px" }
  ],
  data: [
    ["Power Consumption", "Higher", "Lower"],
    ["Computational Load", "Computationally intensive on GAP8", "Computationally intensive on GCS"],
    ["Feedback", "Immediate", "Delayed"],
    ["Risk of Failure", "No single point of failure", "Single point of failure due to Wi-Fi bandwidth issues between drone and GCS"],
    ["Image Quality", "Less noisy", "Noisier"],
  ],
  style: {
    table: {
      width: "max-content"
    },
    th: {
      whiteSpace: "normal",
      wordWrap: "break-word",
      padding: "10px"
    },
    td: {
      whiteSpace: "normal",
      wordWrap: "break-word",
      padding: "10px"
    }
  }
}).render(document.getElementById("comparison-image-processing"));

class ComparisonImageProcessing extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
      <sub>${this.subtitle}</sub>
      <div class="scroll-wrapper">
        <slot></slot>
      </div>
      <style>
        :host {
          display: block;
          text-align: center;
          word-wrap: break-word;
          overflow: hidden;
          white-space: normal;
          box-sizing: border-box;
        }

        sub {
          font-size: 1rem;
          font-style: italic;
        }

        .scroll-wrapper {
          overflow-x: auto;
          margin-top: 1rem;
          max-width: 100%;
        }

        .scroll-wrapper ::slotted(*) {
          min-width: 600px;
        }
      </style>
    `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("comparison-image-processing", ComparisonImageProcessing);
