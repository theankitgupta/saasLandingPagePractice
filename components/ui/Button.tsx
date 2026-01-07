import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

/* NOTE: CVA Concept
  -------------------------
  1. cva() creates a function (we named it 'classes') that generates a string of CSS class names.
  2. The first argument is the "Base Styles". These classes are ALWAYS applied to the button, regardless of the variant (e.g., border, height, rounded corners).
  3. The second argument is the configuration object where we define 'variants'.
*/
const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    /* This 'variant' key matches the prop name we will pass to the component later.
      Inside, we define the specific look for each option ('primary' vs 'secondary').
      
      - If you pass <Button variant="primary" />, it applies the base styles + primary styles.
      - If you pass <Button variant="secondary" />, it applies base styles + secondary styles.
    */
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      sm: "h-10",
    }
  },
  /* NOTE: Default Variants (Optional but recommended)
    You can add a `defaultVariants` object here to set a fallback if no prop is provided.
    Example: defaultVariants: { variant: "primary" }
  */
});

// The props are possible html attributes which a button can take
export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...otherProps } = props;
  return (
    <button
      /* NOTE: Using the function
        We call the `classes()` function we defined above. 
        We pass it the `variant` prop so it knows which styles to pick.
        We also pass `className` to allow overriding/adding extra styles from the parent component.
      */
      className={classes({
        variant,
        className,
        size,
      })}
      {...otherProps}
      type="button"
    />
  );
}
