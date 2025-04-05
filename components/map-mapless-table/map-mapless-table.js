// new gridjs.Grid({
//   columns: [
//     { name: "Criteria", width: "200px" },
//     { name: "Mapped Centralized", width: "250px" },
//     { name: "Mapless Decentralized", width: "250px" }
//   ],
//   data: [
//     ["Exploration Strategy", "Global map + centralized planning", "Local perception + individual logic"],
//     ["Hardware Requirements", "High", "Low"],
//     ["Robustness to Drift", "Low", "High"],
//     ["Adaptability", "Medium", "High"],
//     ["Communication Dependence", "High", "Low"],
//     ["Failure Impact", "High", "Low"],
//     ["Implementation Complexity", "High", "Low to Medium"],
//     ["Coverage Assurance", "High", "Medium"],
//   ],
//   style: {
//     table: {
//       width: "max-content"
//     },
//     th: {
//       whiteSpace: "normal",
//       wordWrap: "break-word",
//       padding: "10px"
//     },
//     td: {
//       whiteSpace: "normal",
//       wordWrap: "break-word",
//       padding: "10px"
//     }
//   }
// }).render(document.getElementById("mapped-mapless-table"));

// class MapMaplessTable extends HTMLElement {
//   static get observedAttributes() {
//     return ["subtitle"];
//   }

//   constructor() {
//     super();
//     this.attachShadow({mode: "open"});
//   }

//   connectedCallback() {
//     this.render();
//   }

//   attributeChangedCallback(name, _, newValue) {
//     this[name] = newValue;
//   }

//   render() {
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <sub>${this.subtitle}</sub>
//     <div class="scroll-wrapper">
//       <slot></slot>
//     </div>
//     <style>
//       :host {
//         display: block;
//         text-align: center;
//         word-wrap: break-word;
//         overflow: hidden;
//         white-space: normal;
//         box-sizing: border-box;
//       }

//       sub {
//         font-size: 1rem;
//         font-style: italic;
//       }

//       .scroll-wrapper {
//         overflow-x: auto;
//         margin-top: 1rem;
//         max-width: 100%;
//       }

//       .scroll-wrapper ::slotted(*) {
//         min-width: 600px;
//       }
//     </style>
//   `;

//     this.shadowRoot.appendChild(div);
//   }
// }

// customElements.define("mapped-mapless-table", MapMaplessTable);

new gridjs.Grid({
  columns: [
    "Criteria", "Mapped Centralized", "Mapless Decentralized"
  ],
  data: [
    ["Exploration Strategy", "Global map + centralized planning", "Local perception + individual logic"],
    ["Hardware Requirements", "High", "Low"],
    ["Robustness to Drift", "Low", "High"],
    ["Adaptability", "Medium", "High"],
    ["Communication Dependence", "High", "Low"],
    ["Failure Impact", "High", "Low"],
    ["Implementation Complexity", "High", "Low to Medium"],
    ["Coverage Assurance", "High", "Medium"],
  ],
  style: {
    table: {
      width: "100%" // Full width
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
}).render(document.getElementById("mapped-mapless-table"));

class MapMaplessTable extends HTMLElement {
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
          box-sizing: border-box;
          width: 100%;
        }

        sub {
          font-size: 1rem;
          font-style: italic;
        }

        .scroll-wrapper {
          overflow-x: visible; /* Removed horizontal scrolling */
          margin-top: 1rem;
          width: 100%;
        }

        .scroll-wrapper ::slotted(*) {
          width: 100%; /* Allow slotted content to fully stretch */
        }
      </style>
    `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("mapped-mapless-table", MapMaplessTable);
