new gridjs.Grid({
  columns: ["", "Run 1", "Run 2", "Run 3"],
  data: [
    ["Victims Rescued (+5) – placed in Known Area", "0/6", "1/6", "1/6"],
    ["Bonus Victim Rescued (+15) – placed in unknown area", "0/1", "0/1", "1/1"],
    ["Bonus Victim Rescued (+15) – placed in pillar area", "0/1", "1/1", "1/1"],
    ["Danger Zones landed near (-3)", "0/4", "0/4", "0/4"],
    ["Total Score", "0", "20", "35"],
  ].map(row => [
    row[0], // first column (criteria)
    row[1],
    row[2],
    gridjs.html(`<strong>${row[3]}</strong>`) // bold last column
  ]),
}).render(document.getElementById("rc4-test-scores"));

class Rc4TestScores extends HTMLElement {
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
    <slot></slot>
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
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("rc4-test-scores", Rc4TestScores);
