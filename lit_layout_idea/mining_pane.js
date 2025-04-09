import { LitElement, html } from "lit";

export class MyElement extends LitElement {
render() {

  return html`
<div style="display: flex; flex-wrap: wrap; border: 1px solid #000;">
    <!-- Image: takes full width up to max-width of 130px -->
    <img src="coal_ore.png" style="padding: 10px; border: 1px solid #ccc; width: 100%; max-width: 130px;">
    
    <!-- Container for the bottom divs -->
    <div style="display: flex; flex-wrap: wrap; width: 100%; gap: 10px;">

        <!-- Four divs below the image -->
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000;"></div>
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000;"></div>
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000;"></div>
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000;"></div>

    </div>
</div>

  `;

}
}

customElements.define('my-element', MyElement);
