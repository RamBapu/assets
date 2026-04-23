# CSS

### CSS3

CSS3 introduced

- modern layout systems - flexbox and grid
- responsive design using media queries
- shadowing - box-shadow, text-shadow
- animations using keyframes
- gradients for background (linear-gradient)
- selectors - attribute selectors, pseudo selectors
- CSS variables for theming

### Box model

Every HTML element is treated as a **rectangular box** in CSS. Box model defines the layout and spacing of elements. It consists of content, padding, border and margin

Content → Padding → Border → Margin

box-sizing: content-box; → default (not recommended) - width is only content

box-sizing: border-box; → (recommended) - width = content + padding + border

### Display property

The `display` property defines **how an element is rendered in the layout flow** .

- block → takes full width, starts on a new line
- inline → takes the content width, no width / height control
- inline-block → takes the same line, width and height can be set
- none → removed from DOM
- flex → 1D layout for navbar
- grid → 2D layout for complex dasboard

  Note: visibility - hidden → hidden but space remains

### Position property

The `position` property controls **where an element appears** .

- static → no positioning
- relative → top, left - moves from original position
- absolute → relative to nearest parent
- fixed → fixed position - sticks to screen
- sticky → sticky when scroll

### CSS Cascading

**Cascading** means _which CSS rule gets applied when multiple rules target the same element_ . It depends on importance, specificity, and source order.

Cascading Order

- Inline styles
- Internal CSS `<style>`
- External CSS (CSS files)
- Default Browser styles

### CSS Specificity

Specificity decides which selector is stronger

Inline (1000) > ID(100) > Class(10) > Element(1)

CSS decides in this order:

1. `!important attribute`
2. Specificity
3. Source order (last wins)

### Selectors

Selectors are used to **target HTML elements** .

p { } / element
_.class { } /_ class
_#id { } /_ id

### Pseudo selectors

**pseudo-selectors** are keywords added to standard selectors to target elements based on their **state** , **position** , or **specific parts** that aren't reachable via standard classes or IDs.
Two types - pseudo classes , pseudo elements

### Pseudo classes vs Pseudo elements

Pseudo-classes define the state of an element like `:hover`, `:focus`, while pseudo-elements target specific parts of elements like `::before`, `::after`. Pseudo-classes use a single colon, pseudo-elements use double colon.

- :hover, :active, :focus, :nth-child(child-number), :first-child, :last-child, :not(), :checked
- ::before, ::after, ::first-letter, ::first-line

### Media Queries

**Media queries** let you apply CSS **based on device conditions** like screen width, height, orientation, or resolution. We typically use a mobile-first approach with `max-width` breakpoints to scale styles for larger screens.

@media (max-width: 768px) { } /_ mobile _/
@media (min-width: 769px) { } /_ desktop _/

Use case: Responsive layouts

### CSS Variables

CSS variables let you **store reusable values** (like colors, spacing, fonts). Defined using `--` and accessed using `var()`

:root {
--primary-color: blue;
--padding: 10px;
}

button {
background: var(--primary-color);
padding: var(--padding);
}

### Animations

CSS animations use `@keyframes` to define step-by-step transitions and are applied using the `animation` property for dynamic UI effects.

animation: name duration timing-function delay iteration-count direction;

animation: slide 2s ease-in-out 1s infinite alternate;

@keyframes slide {
from {
transform: translateX(0);
}
to {
transform: translateX(100px);
}
}

div {
animation: slide 1s ease;
}
