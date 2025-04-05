new gridjs.Grid({
  columns: ["", "Run 1", "Run 2"],
  data: [
    ["Victims Rescued (+5) – placed in Known Area", "2/3", "3/3"],
    ["Bonus Victim Rescued (+15) – placed in Unknown Area", "0/1", "0/1"],
    ["Bonus Victim Rescued (+15) – placed in Pillar Zone", "0/1", "1/1"],
    ["Danger Zones landed near (-3)", "0/4", "1/4"],
    ["Total Score", "10", "27"],
  ].map(row => [
    row[0],
    row[1],
    gridjs.html(`<strong>${row[2]}</strong>`)
  ]),
}).render(document.getElementById("actual-test-scores"));

class ActualTestScores extends HTMLElement {
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

customElements.define("actual-test-scores", ActualTestScores);
