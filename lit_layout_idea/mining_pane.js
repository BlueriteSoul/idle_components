import { LitElement, html } from "lit";

export class MiningPane extends LitElement {
render() {

  return html`
<div style="display: flex; flex-wrap: wrap; border: 1px solid #000; max-width: 170px; float: left">
    <!-- Image: takes full width up to max-width of 130px -->
    <h1>Coal ore</h1>
    <img src="coal_ore.png" style="padding: 10px; border: 1px solid #ccc; width: 100%; max-width: 130px;">
    
    <!-- Container for the bottom divs -->
    <div style="display: flex; flex-wrap: wrap; width: 100%; gap: 10px;">

        <div
                        id="miningBarPlaceHolder"
                        class="w3-green"
                        style="height: 24px; width: 170px; background-color: transparent"
                    ><div
                        id="miningBar"
                        class="w3-green"
                        style="height: 24px; width: 50px; background-color: red"
                    ></div></div>

        <!-- Four divs below the image -->
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000; "></div>
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000;"></div>
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000;"></div>
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000;"></div>

    </div>
</div>

<div style="display: flex; flex-wrap: wrap; border: 1px solid #000; max-width: 170px; float: left">
    <!-- Image: takes full width up to max-width of 130px -->
    <h1>Iron ore</h1>
    <img src="iron_ore.jpg" style="padding: 10px; border: 1px solid #ccc; width: 100%; max-width: 130px;">
    
    <!-- Container for the bottom divs -->
    <div style="display: flex; flex-wrap: wrap; width: 100%; gap: 10px;">

        <!-- Four divs below the image -->
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000;"></div>
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000;"></div>
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000;"></div>
        <div style="width: 50px; height: 50px; background-color: #4CAF50; border: 2px solid #000;"></div>

    </div>
</div>

<div style="display: flex; flex-wrap: wrap; border: 1px solid #000; max-width: 170px; float: left">
    <!-- Image: takes full width up to max-width of 130px -->
    <h1>Copper ore</h1>
    <img src="copper_ore.jpg" style="padding: 10px; border: 1px solid #ccc; width: 100%; max-width: 130px;">
    
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

customElements.define('mining-pane', MiningPane);
