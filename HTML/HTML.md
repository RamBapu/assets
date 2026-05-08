# HTML

### HTML 5

HTML5 makes web pages faster, more interactive with semantic structure

- introduced meaningful tags - `<section>, <article>`
- multimedia support - `<audio>, <video>`
- new input types - email, number, date
- new attributes - placeholder, required, autocomplete
- draggable api - draggable = "true"

### Sematic tags

Semantic HTML tags clearly describe the meaning of the content they contain, improving readability for developers and accessibility for assistive technologies. Eg: `<div>, <header>,<article>,<section>`

- better SEO
- browser understand hierarchy
- improve accessibility

### Accessibility

Accessibility ensures that websites are usable by people with disabilities (visual, auditory, motor, cognitive).

- use semantic tags
- use aria attributes
- provide 'alt' text

### ARIA attributes

ARIA (Accessible Rich Internet Applications) attributes enhance accessibility when semantic HTML is not enough.

### Important ARIA attributes

- aria-label
- aria-labelledby
- aria-describedby
- aria-hidden
- aria-expanded
- aria-controls
- aria-checked
- aria-disabled
- role

### Aria-label vs Aria-labelledby

`<button aria-label="Close">`X `</button>`

Defines a string label for a element

`<label id="label1">`Name `</label><input aria-labelledby="label1">`

Connects an element to the text elsewhere by using id references

If both are used, `aria-labelledby` takes priority

### Why to use button instead of role

We can use keyboard Tab key for navigating through buttons. Buttons respond to Enter or Click by default. Buttons have disabled state by default - preventing interaction

But when giving role as button, we cannot do this. We need extra JS code & styling.

### Data attributes

Data attributes are custom attributes used to store extra information directly on HTML elements, which can be accessed in JavaScript using the `dataset` property. They’re commonly used to pass IDs, states, or metadata between HTML and JS.

`<button data-id="123">`Delete `</button>`

button.onclick = (e) => {
const id = e.target.dataset.id;
};

### Validate forms without JS

- using HTML5 attributes - required, placeholder, type='email'

### Id vs Class

Id is used for unique identifier of a single element on a page where as class is a reusable identifier for a group of elements

Id has higher speficity than class
