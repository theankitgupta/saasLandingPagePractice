/* ANIMATION TECHNIQUE: "Group Hover"
  - `group-hover:-translate-y-1`: Moves the element UP by 4px when the parent is hovered.
  - `group-hover:scale-[1.04]`: Slightly grows the element.
  - `will-change-transform`: Performance optimization hint for the browser.
*/
export const avatarMotion =
  "transition-all duration-300 ease-out will-change-transform group-hover:-translate-y-1 group-hover:scale-[1.04]";

/* ANIMATION TECHNIQUE: "Staggering"
  - Creating an array of Tailwind delay classes allows us to apply them sequentially (0ms, 75ms, 150ms) to create a "wave" effect.
*/
export const avatarStagger = ["delay-0", "delay-75", "delay-150", "delay-200"];

/* ANIMATION TECHNIQUE: "Press Effect"
  - `translate-y-0.5`: Moves the key DOWN.
  - `shadow-[0_3px...]`: Reduces the shadow size (from 6px to 3px).
  - Combined, this physically looks like the key is being pushed into the keyboard.
*/
export const keyMotion =
  "group-hover:translate-y-0.5 group-hover:shadow-[0_3px_0_0_rgba(0,0,0,0.7)]";
