new gridjs.Grid({
  columns: [
    { name: "Criteria", width: "200px" },
    { name: "BFS", width: "200px" },
    { name: "DFS", width: "200px" },
    { name: "Frontier Search", width: "250px" }
  ],
  data: [
    ["Search Pattern", "Layer-by-layer", "Deep, backtracking", "Boundary-driven (frontiers)"],
    ["Coverage Efficiency", "High", "Low", "Very High"],
    ["Multi-Drone Suitability", "Good", "Poor", "Excellent"],
    ["Implementation Complexity", "Low", "Low", "High"],
    ["Computation Requirements", "Low", "Very Low", "Moderate to High"],
    ["Map Dependency", "High", "Low", "Medium"],
    ["Ideal Use Case", "Multi-drone with accurate map", "Single-drone testing", "Efficient full-area search"],
    ["Limitations", "Depends on map quality", "Inefficient pathing", "Heavy processing needs"],
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
}).render(document.getElementById("exploration-strategy-table"));

class ExplorationStrategyTable extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({mode: "open"});
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
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }

      .scroll-wrapper {
        overflow-x: auto;
        margin-top: 1rem;
      }

      .scroll-wrapper ::slotted(*) {
        min-width: 600px; /* Adjust as needed */
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("exploration-strategy-table", ExplorationStrategyTable);
