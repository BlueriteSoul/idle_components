import { LitElement, html, css } from 'lit';

export class MiningOre extends LitElement {
    // Define properties that customize this component from the outside
    static properties = {
        oreName: { type: String },
        imageSrc: { type: String },
        isMining: { type: Boolean, state: true },
        progress: { type: Number, state: true },
    };


    // Store the animation interval ID so we can clear it
    _animationInterval = null;

    static styles = css`
        :host {
            display: block; /* Or inline-block */
            float: left; /* Keep the float as in your example */
            border: 1px solid #000;
            max-width: 170px;
            margin: 5px; /* Add some margin between panes */
            padding: 0; /* Remove padding from host */
            box-sizing: border-box; /* Include border in width */
        }

        .container {
            display: flex;
            flex-direction: column; /* Stack elements vertically */
            align-items: center; /* Center items horizontally */
            padding: 10px; /* Add padding inside the border */
            width: 100%; /* Take full width of host */
            box-sizing: border-box;
        }

        h1 {
            font-size: 1.2em;
            margin: 0 0 10px 0; /* Space below title */
            text-align: center;
            width: 100%;
        }

        .ore-image {
            padding: 0; /* Remove padding */
            border: 1px solid #ccc;
            width: 100%; /* Take full width of container (minus padding) */
            max-width: 130px; /* Limit max width */
            display: block; /* Remove extra space below image */
            cursor: pointer; /* Indicate it's clickable */
            box-sizing: border-box;
        }

        /* Container for the mining bar and the four divs */
        .bottom-section {
            display: flex;
            flex-wrap: wrap; /* Allow wrapping for the four divs */
            width: 100%;
            gap: 10px; /* Gap between the four divs */
            margin-top: 10px; /* Space above this section */
        }

        .mining-bar-placeholder {
            width: 100%; /* Bar takes full width of its container */
            height: 24px;
            background-color: #eee; /* Placeholder color */
            border-radius: 4px;
            overflow: hidden; /* Hide the inner bar overflow */
            margin-bottom: 10px; /* Space below the bar */
        }

        .mining-bar {
            height: 100%;
            width: 0%; /* Initial width */
            background-color: red; /* Bar color */
            /* Smooth transition for width changes */
            transition: width 2s linear; /* 2 seconds animation */
        }

        .bottom-square {
            width: 50px;
            height: 50px;
            background-color: #4CAF50;
            border: 2px solid #000;
            box-sizing: border-box;
        }
    `;

    constructor() {
        super();
        // Initialize properties if not using decorators or setting defaults
        // this.isMining = false;
        // this.progress = 0;
        // this._animationInterval = null;
    }

    // Method called when the image is clicked
    _handleImageClick() {
        this.isMining = !this.isMining; // Toggle mining state

        if (this.isMining) {
            this.progress = 0; // Reset progress when starting
            this._startMiningAnimation();
            console.log(`Starting mining: ${this.oreName}`);
        } else {
            this._stopMiningAnimation();
            this.progress = 0; // Reset progress when stopping
            console.log(`Stopping mining: ${this.oreName}`);
        }
    }

    _startMiningAnimation() {
        const duration = 2000; // 2 seconds
        const intervalTime = 20; // Update every 20ms (for smoother steps if needed, but CSS transition handles smoothing)
        const totalSteps = duration / intervalTime;
        const increment = 100 / totalSteps; // Percentage increase per step

        // Clear any existing interval just in case
        if (this._animationInterval) {
            clearInterval(this._animationInterval);
        }

        // Set the initial width immediately to 0% (already done by progress=0)
        // Then start the animation by setting the final width to 100%
        // The CSS transition property handles the 2-second fill animation.
        // For a loop, we reset the progress *after* the transition completes.

        this.progress = 100; // Set target to 100% to trigger the transition

        // Use a timeout matching the transition duration to reset and loop
        this._animationInterval = setTimeout(() => {
            // Check if we are still mining after the transition
            if (this.isMining) {
                 // Reset progress to 0 to prepare for the next loop's transition
                 // We need a tiny delay before setting back to 100% to ensure
                 // the browser registers the transition starting from 0 again.
                 this.progress = 0;
                 // Use requestAnimationFrame to wait for the next paint cycle
                 requestAnimationFrame(() => {
                     requestAnimationFrame(() => { // Wait for two frames
                          if (this.isMining) { // Check again in case state changed during frames
                             this.progress = 100; // Start the transition again
                             // Re-schedule the timeout for the next loop
                             this._animationInterval = setTimeout(() => {
                                 if (this.isMining) {
                                      // Loop again
                                     this.progress = 0;
                                     requestAnimationFrame(() => {
                                         requestAnimationFrame(() => {
                                              if (this.isMining) this.progress = 100;
                                              this._animationInterval = setTimeout(arguments.callee, duration); // Recursive call for infinite loop while mining
                                         });
                                     });
                                 } else {
                                      this._animationInterval = null; // Stop
                                 }
                             }, duration);

                         } else {
                              this._animationInterval = null; // Stop
                         }
                     });
                 });
            } else {
                this._animationInterval = null; // Stop
            }
        }, duration); // Match the CSS transition duration


        // A simpler looping mechanism using setInterval and manual progress update:
        /*
        this._animationInterval = setInterval(() => {
             if (!this.isMining) {
                 clearInterval(this._animationInterval);
                 this._animationInterval = null;
                 this.progress = 0; // Reset bar when stopping
                 return;
             }

             let currentProgress = this.progress + (increment * (intervalTime / 1000) * (1000 / duration)); // calculate step based on interval time and total duration

             if (currentProgress >= 100) {
                 currentProgress = 100;
                 this.progress = currentProgress;
                 // If reached 100 and still mining, reset for next loop
                 setTimeout(() => { // Small delay before resetting visually
                     if (this.isMining) {
                         this.progress = 0;
                     }
                 }, 10); // Reset quickly
             } else {
                 this.progress = currentProgress;
             }

         }, intervalTime);
         */
         // Sticking to the setTimeout/requestAnimationFrame approach as it aligns with CSS transition better for the "2s fill" look. Let's simplify the recursive timeout logic.

         const loop = () => {
             if (!this.isMining) {
                 this._animationInterval = null;
                 this.progress = 0; // Reset on stop
                 return;
             }

             // Reset progress to 0 to ensure the transition starts from the beginning
             this.progress = 0;

             // Use requestAnimationFrame to wait for the next render frame
             requestAnimationFrame(() => {
                 // Wait for another frame to ensure the CSS transition from 0 is registered
                 requestAnimationFrame(() => {
                     if (this.isMining) { // Check state again
                         // Set progress to 100 to trigger the 2s CSS transition
                         this.progress = 100;
                         // Schedule the next loop iteration after the transition duration
                         this._animationInterval = setTimeout(loop, duration);
                     } else {
                          this._animationInterval = null; // Stop
                          this.progress = 0; // Reset on stop
                     }
                 });
             });
         };

         // Start the first loop
         loop();
    }


    _stopMiningAnimation() {
        // The `this.isMining = false` in _handleImageClick will cause the `loop` function
        // in the animation to exit on its next iteration or check.
        // However, it's good practice to clear the timeout explicitly as well.
        if (this._animationInterval) {
            clearTimeout(this._animationInterval);
            this._animationInterval = null;
        }
        this.progress = 0; // Ensure the bar is hidden
    }

    // Clean up timers if the element is removed from the DOM
    disconnectedCallback() {
        super.disconnectedCallback();
        this._stopMiningAnimation();
    }


    render() {
        return html`
            <div class="container">
                <h1>${this.oreName}</h1>
                <img
                    src="${this.imageSrc}"
                    class="ore-image"
                    @click=${this._handleImageClick}
                    alt="${this.oreName} ore"
                >

                <div class="bottom-section">
                    <div class="mining-bar-placeholder">
                        <div
                            class="mining-bar"
                            style="width: ${this.progress}%;"
                        ></div>
                    </div>

                    <div class="bottom-square"></div>
                    <div class="bottom-square"></div>
                    <div class="bottom-square"></div>
                    <div class="bottom-square"></div>
                </div>
            </div>
        `;
    }
}

// Define the custom element
customElements.define('mining-ore', MiningOre);