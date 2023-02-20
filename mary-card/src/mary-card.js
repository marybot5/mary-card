import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "@lrnwebcomponents/moar-sarcasm/moar-sarcasm.js";

import { LitElement, html, css } from 'lit';

export class MyElement extends LitElement {

  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      position: {
        type: String,
      }
    }
  }

  static get styles() {
    return css`
       .btn {
  padding: 10px;
  margin: 15px;
  border: 5px solid pink;
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
}

.btn:hover {
  background-color: pink;
}

.btn:focus {
  color: orange;
}

.all {
  border-style:dotted;
  border-width:5px;
  border-color: pink;
  width:500px;
  max-width:500px;
  margin: auto;
  background-color: blue;
}

.title {
  text-align: center;
  font-size:40px;
}

.header {
  text-align: center;
  font-size: 25px;
}

.paragraph {
  text-align: center;
}

img {
  width: 400px;
}

p {
  text-alight: center;
  font-size: 18px;
  padding: 10px;
  color: pink;
}

.detailButton {
    margin: 10px;
    position: center;
    border: 5px solid pink;
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
    text-decoration: underline;
    padding: 10px;
  }

@media (min-width: 500px) and (max-width: 800px) {
  .detailBtn{
    display: none;
  }
}

@media (max-width: 500px) {
  .all {
    transform: scale(0.8);
  }
} 
    `;
  }

  constructor() {
    super();
    const stuff = "milkcat";
    this.version = 'messy';
  }

  render() {
    return html`
<section class="all">
<header class="header">
<h1 id="title">Week 3 Homework!</h1>
  </header>
<section class="paragraph">
<img src="https://i.kym-cdn.com/entries/icons/mobile/000/039/424/catfp.jpg" alt="Description for image" width="400" height="250">

  <p> Little tiny black cat that got into the milk. He will continue to drink the milk because he's hungry. He's cute and funny. 
  </p>
   <button id="detailBtn">Details</button>
<!-- <a href="https://hax.psu.edu/"> -->
</a>  
</section>
</section>

    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    `;
  }
}
customElements.define('mary-card', MaryCard);