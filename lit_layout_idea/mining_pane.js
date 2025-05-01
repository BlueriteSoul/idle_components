import { LitElement, html, css } from 'lit';
// Import the new component so the browser knows about it
import './mining_ore.js';

export class MiningPane extends LitElement {
    static styles = css`
        :host {
            display: block; /* Use block or flex for layout */
            /* Your previous float: left and max-width styling was on the inner div.
               Let's apply layout to the host or a container div here. */
             max-width: 550px; /* Example: enough space for 3 panes side-by-side + gaps */
             margin: 20px auto; /* Center the group */
        }

        .panes-container {
            display: flex; /* Use flexbox to arrange the ore panes */
            flex-wrap: wrap; /* Allow panes to wrap if the container is too narrow */
            gap: 10px; /* Gap between the mining-ore components */
            border: 1px solid #000; /* Border around the whole group */
            padding: 10px; /* Padding inside the group border */
        }

        /* Remove individual pane styling from here, it's in mining-ore.js */
        /* .mining-pane { ... } */
    `;

    render() {
        return html`
            <div class="panes-container">
                <mining-ore oreName="Coal ore" imageSrc="coal_ore.png"></mining-ore>
                <mining-ore oreName="Iron ore" imageSrc="iron_ore.jpg"></mining-ore>
                <mining-ore oreName="Copper ore" imageSrc="copper_ore.jpg"></mining-ore>
                </div>
        `;
    }
}

// Define the custom element
customElements.define('mining-pane', MiningPane);