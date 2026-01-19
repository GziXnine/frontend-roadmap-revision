# CSS Interview Questions & Answers 🎨

## 🗂️ Table of Contents

1. [CSS Fundamentals](#1-css-fundamentals)
2. [Selectors Deep Dive](#2-selectors-deep-dive)
3. [Box Model & Sizing](#3-box-model--sizing)
4. [Background Properties](#4-background-properties)
5. [Display & Visibility](#5-display--visibility)
6. [Position & Z-Index](#6-position--z-index)
7. [Flexbox Mastery](#7-flexbox-mastery)
8. [CSS Grid Layout](#8-css-grid-layout)
9. [Typography & Text Styling](#9-typography--text-styling)
10. [Transforms (2D & 3D)](#10-transforms-2d--3d)
11. [Transitions & Animations](#11-transitions--animations)
12. [Pseudo-Classes & Pseudo-Elements](#12-pseudo-classes--pseudo-elements)
13. [CSS Variables (Custom Properties)](#13-css-variables-custom-properties)
14. [Responsive Design & Media Queries](#14-responsive-design--media-queries)
15. [Modern CSS Features](#15-modern-css-features)
16. [CSS Units](#16-css-units)
17. [Overflow & Text Handling](#17-overflow--text-handling)
18. [Float & Clear](#18-float--clear)
19. [CSS Specificity & Inheritance](#19-css-specificity--inheritance)
20. [Advanced Interview Questions](#20-advanced-interview-questions)

---

## 1. CSS Fundamentals

### What is CSS and what does it stand for?
**CSS** stands for **Cascading Style Sheets**. It's a stylesheet language used to describe the presentation of HTML documents, controlling layout, colors, fonts, and overall visual appearance.

### What are the three ways to add CSS to HTML?

1. **External CSS** (Recommended)
```html
<link rel="stylesheet" href="styles.css">
```

2. **Internal CSS**
```html
<style>
  p { color: red; }
</style>
```

3. **Inline CSS** (Not recommended)
```html
<p style="color: red;">Text</p>
```

### What is a CSS Declaration?
A CSS declaration consists of a **property** and a **value**, separated by a colon:
```css
Selector {
  property: value; /* This is a declaration */
  color: red;      /* property: value */
}
```

### Why shouldn't you use `id` for styling?
- **Specificity issues**: IDs have very high specificity, making them hard to override
- **Not reusable**: IDs should be unique on a page
- **Best practice**: Use classes for styling, IDs for JavaScript hooks

---

## 2. Selectors Deep Dive

### What are the different types of CSS selectors?

| Selector Type | Syntax | Example |
|--------------|--------|---------|
| **Element** | `element` | `p { }` |
| **Class** | `.class` | `.box { }` |
| **ID** | `#id` | `#header { }` |
| **Universal** | `*` | `* { }` |
| **Descendant** | `A B` | `div p { }` |
| **Child** | `A > B` | `div > p { }` |
| **Adjacent Sibling** | `A + B` | `h2 + p { }` |
| **General Sibling** | `A ~ B` | `h2 ~ p { }` |
| **Attribute** | `[attr]` | `[type="text"] { }` |
| **Multiple Classes** | `.class1.class2` | `.box.active { }` |

### What's the difference between `.class1.class2` and `.class1 .class2`?

- **`.class1.class2`**: Selects elements that have **both** classes
```html
<div class="class1 class2">Selected</div>
```

- **`.class1 .class2`**: Selects `.class2` elements **inside** `.class1`
```html
<div class="class1">
  <p class="class2">Selected</p>
</div>
```

### Explain Attribute Selectors

```css
/* Has attribute */
[type] { }

/* Exact match */
[type="text"] { }
input[type="submit"] { }

/* Contains word */
[class~="box"] { }

/* Contains string */
[class*="btn"] { }

/* Starts with */
[class^="btn-"] { }

/* Ends with */
[class$="-primary"] { }
```

### What's the difference between `:nth-child()` and `:nth-of-type()`?

- **`:nth-child(n)`**: Selects based on position among **all siblings**
- **`:nth-of-type(n)`**: Selects based on position among **siblings of the same type**

```css
/* Select 2nd paragraph among all children */
p:nth-child(2) { }

/* Select 2nd paragraph among p elements */
p:nth-of-type(2) { }

/* Select every 3rd element starting from 2nd */
div:nth-child(3n + 2) { }

/* Select odd children */
li:nth-child(odd) { }

/* Select first 5 children */
li:nth-child(-n + 5) { }
```

**Pro Tip**: Use [nthmaster.com](https://nthmaster.com) to practice nth-child formulas!

---

## 3. Box Model & Sizing

### Explain the CSS Box Model

The box model consists of (from inside to outside):

```
┌─────────────────────────────────────┐
│           MARGIN                    │
│  ┌───────────────────────────────┐  │
│  │        BORDER                 │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │      PADDING            │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │    CONTENT        │  │  │  │
│  │  │  │                   │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

1. **Content**: Actual content (text, images)
2. **Padding**: Space between content and border
3. **Border**: Border around padding
4. **Margin**: Space outside border

### What does `box-sizing: border-box` do?

```css
/* Default behavior (content-box) */
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Total width = 200 + 40 + 10 = 250px */
}

/* With border-box */
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Total width = 200px (padding and border included) */
}
```

**Best Practice**: Apply globally
```css
* {
  box-sizing: border-box;
}
```

### What's the difference between `padding` and `margin`?

- **Padding**: Space **inside** the element (between content and border)
  - Inherits background color
  - Part of clickable area
  
- **Margin**: Space **outside** the element (between border and other elements)
  - Always transparent
  - Not part of clickable area
  - Can collapse (vertical margins)

```css
/* Shorthand syntax: Top Right Bottom Left (clockwise) */
padding: 10px 20px 30px 40px;

/* Top/Bottom | Left/Right */
padding: 10px 20px;

/* All sides */
padding: 10px;
```

### What are `min-width`, `max-width`, and `width`?

```css
.element {
  width: 500px;       /* Fixed width */
  min-width: 300px;   /* Minimum width (prevents shrinking below) */
  max-width: 800px;   /* Maximum width (prevents growing above) */
}

/* Common pattern for responsive containers */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
```

### What is Margin Collapse?

**Margin collapse** occurs when vertical margins of adjacent elements combine into a single margin.

```css
.box1 {
  margin-bottom: 30px;
}

.box2 {
  margin-top: 20px;
}

/* Gap between boxes = 30px (not 50px!) */
/* The larger margin wins */
```

**When it happens**:
- Adjacent siblings
- Parent and first/last child
- Empty blocks

**How to prevent**:
- Use padding instead
- Add border or padding to parent
- Use `overflow: hidden` on parent
- Use flexbox/grid

---

## 4. Background Properties

### Explain all background properties

```css
.element {
  /* Color */
  background-color: red;
  background-color: rgb(255, 0, 0);
  background-color: rgba(255, 0, 0, 0.5); /* With alpha */
  background-color: #FF0000;

  /* Image */
  background-image: url("image.jpg");

  /* Repeat */
  background-repeat: no-repeat;  /* Don't repeat */
  background-repeat: repeat;     /* Default: repeat both */
  background-repeat: repeat-x;   /* Repeat horizontally */
  background-repeat: repeat-y;   /* Repeat vertically */

  /* Attachment */
  background-attachment: scroll; /* Default: scroll with content */
  background-attachment: fixed;  /* Fixed to viewport */

  /* Position */
  background-position: center top;
  background-position: 50px 70px;    /* From left, from top */
  background-position: 10% 34%;
  background-position: right bottom;

  /* Size */
  background-size: cover;        /* Cover entire element */
  background-size: contain;      /* Fit inside element */
  background-size: 100% 100%;    /* Stretch to fit */
  background-size: 200px 150px;  /* Fixed dimensions */
}

/* Shorthand */
background: #fff url("bg.jpg") no-repeat center / cover;
```

### What's the difference between `cover` and `contain`?

- **`cover`**: Scales image to cover entire element (may crop)
  - Image fills the container completely
  - Maintains aspect ratio
  - Parts of image may be cut off

- **`contain`**: Scales image to fit inside element (may show gaps)
  - Entire image visible
  - Maintains aspect ratio
  - May have empty space

### How do you create gradients?

```css
/* Linear Gradient */
.gradient {
  background: linear-gradient(to right, red, yellow);
  background: linear-gradient(45deg, red, yellow, green, blue);
  background: linear-gradient(to bottom right, red, yellow);
}

/* Radial Gradient */
.radial {
  background: radial-gradient(circle, red, yellow);
}

/* Multiple gradients */
.multi {
  background: 
    linear-gradient(to right, rgba(255,0,0,0.5), transparent),
    url("image.jpg");
}
```

---

## 5. Display & Visibility

### What are the different `display` values?

```css
.element {
  display: block;        /* Takes full width, new line */
  display: inline;       /* Only necessary width, no line break */
  display: inline-block; /* Inline but can set width/height */
  display: flex;         /* Flexbox container */
  display: grid;         /* Grid container */
  display: none;         /* Hidden, removed from flow */
}
```

### Difference between `display: none` and `visibility: hidden`?

| Property | Space Taken | Accessible | Transitions | SEO |
|----------|-------------|------------|-------------|-----|
| `display: none` | No | No | No | Not indexed |
| `visibility: hidden` | Yes | No | Yes | Indexed |
| `opacity: 0` | Yes | Yes | Yes | Indexed |

```css
/* Removed from document flow */
.hidden-display {
  display: none;
}

/* Takes space but invisible */
.hidden-visibility {
  visibility: hidden;
}

/* Transparent but interactive */
.transparent {
  opacity: 0;
}
```

### What's the difference between `block`, `inline`, and `inline-block`?

| Property | Width/Height | Line Break | Margins/Padding | Example Elements |
|----------|--------------|------------|-----------------|------------------|
| `block` | Yes | Yes (new line) | All sides | `div`, `p`, `h1` |
| `inline` | No | No | Horizontal only | `span`, `a`, `strong` |
| `inline-block` | Yes | No | All sides | - |

---

## 6. Position & Z-Index

### Explain all position values

```css
/* Static: Default, normal flow */
.static {
  position: static;
}

/* Relative: Positioned relative to normal position */
.relative {
  position: relative;
  top: 10px;    /* 10px down from normal position */
  left: 20px;   /* 20px right from normal position */
}

/* Absolute: Positioned relative to nearest positioned ancestor */
.absolute {
  position: absolute;
  top: 0;
  right: 0;
  /* Positioned relative to nearest parent with position !== static */
}

/* Fixed: Positioned relative to viewport */
.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* Stays in place when scrolling */
}

/* Sticky: Switches between relative and fixed */
.sticky {
  position: sticky;
  top: 0;
  /* Sticks when scrolling past threshold */
}
```

### How does `z-index` work?

**Key Points**:
- Only works on **positioned elements** (`position !== static`)
- Higher values appear on top
- Creates **stacking context**

```css
.layer1 {
  position: relative;
  z-index: 1;
}

.layer2 {
  position: relative;
  z-index: 10;  /* Appears above layer1 */
}

.layer3 {
  position: relative;
  z-index: -1;  /* Appears behind */
}
```

### What is a stacking context?

A stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis.

**Created by**:
- Root element (`<html>`)
- Positioned elements with `z-index !== auto`
- Elements with `opacity < 1`
- Elements with `transform`, `filter`, `perspective`
- Flex/grid items with `z-index !== auto`

---

## 7. Flexbox Mastery

### Explain Flexbox Container Properties

```css
.flex-container {
  display: flex;  /* or inline-flex */

  /* Direction */
  flex-direction: row;           /* Default: left to right */
  flex-direction: row-reverse;   /* right to left */
  flex-direction: column;        /* top to bottom */
  flex-direction: column-reverse;

  /* Wrapping */
  flex-wrap: nowrap;    /* Default: single line */
  flex-wrap: wrap;      /* Multi-line */
  flex-wrap: wrap-reverse;

  /* Shorthand for direction + wrap */
  flex-flow: row wrap;

  /* Main axis alignment (horizontal for row) */
  justify-content: flex-start;    /* Default */
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between; /* Equal space between */
  justify-content: space-around;  /* Equal space around */
  justify-content: space-evenly;  /* Equal space everywhere */

  /* Cross axis alignment (vertical for row) */
  align-items: stretch;   /* Default: fill container */
  align-items: flex-start;
  align-items: flex-end;
  align-items: center;
  align-items: baseline;  /* Align baselines */

  /* Multi-line cross axis alignment */
  align-content: stretch;   /* Default */
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
}
```

### Explain Flexbox Item Properties

```css
.flex-item {
  /* Growth: how much item will grow */
  flex-grow: 0;     /* Default: don't grow */
  flex-grow: 1;     /* Grow to fill space */
  flex-grow: 2;     /* Grow twice as much */

  /* Shrink: how much item will shrink */
  flex-shrink: 1;   /* Default: shrink if needed */
  flex-shrink: 0;   /* Don't shrink */

  /* Base size before grow/shrink */
  flex-basis: auto; /* Default: based on content */
  flex-basis: 200px;
  flex-basis: 30%;

  /* Shorthand: grow shrink basis */
  flex: 0 1 auto;   /* Default */
  flex: 1;          /* Same as: 1 1 0 */
  flex: 1 0 200px;

  /* Order */
  order: 0;         /* Default: source order */
  order: 1;         /* Appears later */
  order: -1;        /* Appears earlier */

  /* Individual alignment */
  align-self: auto; /* Default: inherit from parent */
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: baseline;
  align-self: stretch;
}
```

### Common Flexbox Patterns

```css
/* Center horizontally and vertically */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Equal width columns */
.columns {
  display: flex;
}
.columns > * {
  flex: 1;
}

/* Responsive grid that wraps */
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.grid > * {
  flex: 1 1 300px; /* min-width 300px */
}
```

---

## 8. CSS Grid Layout

### Explain Grid Container Properties

```css
.grid-container {
  display: grid;  /* or inline-grid */

  /* Define columns */
  grid-template-columns: 200px 200px 200px;
  grid-template-columns: 1fr 2fr 1fr;  /* Fractional units */
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-columns: 100px auto 100px;

  /* Define rows */
  grid-template-rows: 100px 200px;
  grid-template-rows: repeat(3, 100px);

  /* Shorthand */
  grid-template: repeat(3, 100px) / repeat(4, 1fr);
  /* rows / columns */

  /* Gaps */
  gap: 20px;           /* row and column gap */
  gap: 20px 10px;      /* row-gap column-gap */
  row-gap: 20px;
  column-gap: 10px;

  /* Alignment */
  justify-content: start | end | center | stretch;
  align-content: start | end | center | stretch;
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;

  /* Named grid areas */
  grid-template-areas:
    "header header header"
    "nav content sidebar"
    "footer footer footer";
}
```

### Explain Grid Item Properties

```css
.grid-item {
  /* Column placement */
  grid-column-start: 1;
  grid-column-end: 3;
  grid-column: 1 / 3;      /* Shorthand */
  grid-column: 1 / span 2; /* Span 2 columns */

  /* Row placement */
  grid-row-start: 1;
  grid-row-end: 3;
  grid-row: 1 / 3;         /* Shorthand */
  grid-row: 1 / span 2;

  /* Shorthand: row-start / col-start / row-end / col-end */
  grid-area: 1 / 1 / 3 / 3;

  /* Named area */
  grid-area: header;

  /* Individual alignment */
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

### What's the difference between `auto-fill` and `auto-fit`?

```css
/* auto-fill: Creates as many tracks as possible (empty tracks remain) */
grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

/* auto-fit: Creates tracks and collapses empty ones */
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
```

- **`auto-fill`**: Fills row with as many columns as possible, keeps empty tracks
- **`auto-fit`**: Fits columns and expands them to fill space

### Grid vs Flexbox: When to use what?

| Use Case | Recommendation |
|----------|----------------|
| One-dimensional layout (row OR column) | Flexbox |
| Two-dimensional layout (rows AND columns) | Grid |
| Content-driven sizing | Flexbox |
| Layout-driven sizing | Grid |
| Small-scale layouts | Flexbox |
| Large-scale layouts | Grid |
| Alignment within single axis | Flexbox |
| Complex layouts with overlapping | Grid |

---

## 9. Typography & Text Styling

### Explain Font Properties

```css
.text {
  /* Font family with fallbacks */
  font-family: "Cairo Play", "Arial", sans-serif;
  
  /* Font size */
  font-size: 16px;      /* Pixels */
  font-size: 1em;       /* Relative to parent */
  font-size: 1rem;      /* Relative to root (html) */
  font-size: 100%;      /* Percentage */

  /* Font weight: 100-900 */
  font-weight: normal;  /* 400 */
  font-weight: bold;    /* 700 */
  font-weight: 300;     /* Light */
  font-weight: 900;     /* Black */

  /* Font style */
  font-style: normal;
  font-style: italic;
  font-style: oblique;

  /* Font variant */
  font-variant: normal;
  font-variant: small-caps;
}
```

### Explain Text Properties

```css
.text {
  /* Color */
  color: red;
  color: #FF0000;
  color: rgb(255, 0, 0);

  /* Alignment */
  text-align: left;      /* Default */
  text-align: right;
  text-align: center;
  text-align: justify;

  /* Direction */
  direction: ltr;        /* Left to right */
  direction: rtl;        /* Right to left */

  /* Vertical alignment (inline elements) */
  vertical-align: top;
  vertical-align: middle;
  vertical-align: bottom;
  vertical-align: baseline;

  /* Decoration */
  text-decoration: none;
  text-decoration: underline;
  text-decoration: overline;
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-style: solid | dotted | dashed | wavy;

  /* Transform */
  text-transform: none;
  text-transform: capitalize;  /* First Letter Uppercase */
  text-transform: uppercase;   /* ALL UPPERCASE */
  text-transform: lowercase;   /* all lowercase */

  /* Spacing */
  letter-spacing: 2px;    /* Space between letters */
  letter-spacing: -1px;   /* Tighter letters */
  word-spacing: 10px;     /* Space between words */
  line-height: 1.6;       /* Line height (no unit = multiplier) */
  text-indent: 50px;      /* First line indent */

  /* Shadow */
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  text-shadow: h-offset v-offset blur color;
}
```

### How to handle text overflow?

```css
/* Single line ellipsis */
.ellipsis {
  white-space: nowrap;       /* Don't wrap */
  overflow: hidden;          /* Hide overflow */
  text-overflow: ellipsis;   /* Show ... */
}

/* Multi-line ellipsis (webkit only) */
.multi-line-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 3;     /* Number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Word breaking */
.break-word {
  word-break: break-all;     /* Break anywhere */
  word-break: break-word;    /* Break at word boundaries */
  overflow-wrap: break-word; /* Modern property */
}
```

### What is inheritance in CSS?

Some CSS properties are **inherited** by child elements from their parents.

**Inherited properties**: `color`, `font-*`, `text-*`, `line-height`, `visibility`
**Not inherited**: `margin`, `padding`, `border`, `background`, `display`

```css
.parent {
  color: blue;        /* Inherited by children */
  padding: 20px;      /* NOT inherited */
}

.child {
  /* color is blue (inherited) */
  /* padding is 0 (not inherited) */
}

/* Force inheritance */
.child {
  padding: inherit;   /* Inherit parent's padding */
}
```

---

## 10. Transforms (2D & 3D)

### What are 2D Transform functions?

```css
.element {
  /* Translate: Move element */
  transform: translate(50px, 100px);   /* X, Y */
  transform: translateX(50px);
  transform: translateY(100px);

  /* Rotate: Rotate element */
  transform: rotate(45deg);
  transform: rotate(-90deg);

  /* Scale: Resize element */
  transform: scale(1.5);       /* Both X and Y */
  transform: scale(2, 0.5);    /* X, Y */
  transform: scaleX(2);
  transform: scaleY(0.5);

  /* Skew: Slant element */
  transform: skew(20deg, 10deg);  /* X, Y */
  transform: skewX(20deg);
  transform: skewY(10deg);

  /* Combine multiple transforms */
  transform: translate(50px, 50px) rotate(45deg) scale(1.2);

  /* Matrix: All transforms in one */
  transform: matrix(a, b, c, d, e, f);
  /* a=scaleX, b=skewY, c=skewX, d=scaleY, e=translateX, f=translateY */

  /* Transform origin: Change rotation/scale point */
  transform-origin: center center;  /* Default */
  transform-origin: top left;
  transform-origin: 50% 50%;
  transform-origin: 100px 200px;
}
```

### What are 3D Transform functions?

```css
.element-3d {
  /* Translate 3D */
  transform: translate3d(50px, 100px, 200px);  /* X, Y, Z */
  transform: translateZ(200px);

  /* Rotate 3D */
  transform: rotate3d(1, 1, 1, 45deg);  /* X-axis, Y-axis, Z-axis, angle */
  transform: rotateX(45deg);
  transform: rotateY(45deg);
  transform: rotateZ(45deg);

  /* Scale 3D */
  transform: scale3d(1, 1, 2);
  transform: scaleZ(2);

  /* Perspective: Add depth */
  transform: perspective(1000px);
}

/* Perspective on parent (better) */
.parent {
  perspective: 1000px;  /* Distance from viewer */
  perspective-origin: center center;
}

.child {
  transform-style: preserve-3d;  /* Preserve 3D space */
  backface-visibility: hidden;   /* Hide back side */
  transform: rotateY(180deg);
}
```

---

## 11. Transitions & Animations

### How do CSS Transitions work?

```css
.button {
  background: blue;
  transition: background 0.3s ease;
  
  /* Multiple properties */
  transition: background 0.3s ease, 
              transform 0.2s ease-in-out,
              box-shadow 0.3s ease;
  
  /* All properties */
  transition: all 0.3s ease;
}

.button:hover {
  background: red;
  transform: scale(1.1);
}

/* Transition properties */
.element {
  transition-property: background;
  transition-duration: 0.3s;
  transition-timing-function: ease;  /* ease, linear, ease-in, ease-out, ease-in-out */
  transition-delay: 0.1s;
  
  /* Cubic bezier for custom timing */
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

### What timing functions are available?

| Function | Description | Use Case |
|----------|-------------|----------|
| `ease` | Slow start, fast middle, slow end | Default, general use |
| `linear` | Constant speed | Progress bars |
| `ease-in` | Slow start, fast end | Elements leaving |
| `ease-out` | Fast start, slow end | Elements entering |
| `ease-in-out` | Slow start and end | Smooth back-and-forth |
| `cubic-bezier()` | Custom curve | Fine-tuned control |

### How do CSS Animations work?

```css
/* Define keyframes */
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Apply animation */
.element {
  animation: slideIn 1s ease-in-out 0.5s infinite alternate both running;
  /* name | duration | timing | delay | iteration | direction | fill-mode | play-state */
}

/* Detailed properties */
.element {
  animation-name: slideIn;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;  /* or number */
  animation-direction: normal;          /* normal, reverse, alternate, alternate-reverse */
  animation-fill-mode: both;            /* none, forwards, backwards, both */
  animation-play-state: running;        /* running, paused */
}

/* Multiple animations */
.element {
  animation: slideIn 1s ease, fadeIn 0.5s ease;
}
```

### Difference between Transitions and Animations?

| Feature | Transitions | Animations |
|---------|-------------|------------|
| Trigger | Requires state change (hover, click) | Can run automatically |
| Keyframes | No (only start/end) | Yes (multiple stages) |
| Iterations | Once per trigger | Can loop |
| Control | Less control | Full control |
| Best for | Simple effects | Complex effects |

---

## 12. Pseudo-Classes & Pseudo-Elements

### What are Pseudo-Classes?

Pseudo-classes select elements based on their **state**.

```css
/* Link states */
a:link { }       /* Unvisited link */
a:visited { }    /* Visited link */
a:hover { }      /* Mouse over */
a:active { }     /* Being clicked */
a:focus { }      /* Focused (keyboard) */

/* Child pseudo-classes */
li:first-child { }
li:last-child { }
li:only-child { }
li:nth-child(2) { }
li:nth-child(odd) { }
li:nth-child(3n + 1) { }

/* Type pseudo-classes */
p:first-of-type { }
p:last-of-type { }
p:only-of-type { }
p:nth-of-type(2) { }

/* Other pseudo-classes */
input:checked { }
input:disabled { }
input:enabled { }
input:required { }
input:optional { }
div:empty { }
p:not(.special) { }

/* Root element */
:root {
  /* Perfect for CSS variables */
}
```

### What are Pseudo-Elements?

Pseudo-elements create **virtual elements** to style specific parts.

```css
/* First letter/line */
p::first-letter {
  font-size: 2em;
  color: red;
}

p::first-line {
  font-weight: bold;
}

/* Selection */
::selection {
  background: yellow;
  color: black;
}

/* Placeholder */
input::placeholder {
  color: #999;
  opacity: 1;
}

/* Before/After (most powerful) */
.element::before {
  content: "★ ";
  color: gold;
}

.element::after {
  content: " ✓";
  color: green;
}

/* List marker */
li::marker {
  color: red;
  font-size: 1.5em;
}
```

### Advanced `::before` and `::after` examples

```css
/* Icon before text */
.icon::before {
  content: "→";
  margin-right: 10px;
}

/* Decorative line */
.heading::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: blue;
  margin-top: 10px;
}

/* Counter */
body {
  counter-reset: section;
}
h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}

/* Attribute content */
a::after {
  content: " (" attr(href) ")";
}
```

### Modern Pseudo-Classes: `:is()`, `:where()`, `:has()`

```css
/* :is() - Matches any selector in list */
:is(h1, h2, h3) {
  color: blue;
}

/* Same as: h1, h2, h3 { color: blue; } */

/* :where() - Like :is() but with 0 specificity */
:where(h1, h2, h3) {
  color: blue;
}

/* :has() - Parent selector (game changer!) */
/* Select div that has an anchor */
div:has(a) {
  border: 2px solid green;
}

/* Select div that has both a and span */
div:has(a):has(span) {
  border: 2px solid red;
}

/* Select parent if child has class */
.parent:has(.child.active) {
  background: yellow;
}
```

---

## 13. CSS Variables (Custom Properties)

### How do you declare and use CSS variables?

```css
/* Declare in :root for global scope */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-large: 24px;
  --spacing: 20px;
}

/* Use with var() */
.button {
  background: var(--primary-color);
  padding: var(--spacing);
  font-size: var(--font-size-large);
}

/* Fallback value */
.element {
  color: var(--text-color, black);  /* Use black if --text-color not defined */
}

/* Scoped variables */
.dark-theme {
  --primary-color: #1a1a1a;
  --text-color: white;
}
```

### What is the scope of CSS variables?

```css
/* Global scope */
:root {
  --color: blue;
}

/* Component scope */
.card {
  --padding: 20px;
}

.card .content {
  padding: var(--padding);  /* Can access parent's variable */
}

/* Variables cascade and inherit */
.parent {
  --size: 100px;
}

.child {
  width: var(--size);  /* Inherits from parent */
}
```

### Practical examples

```css
/* Theme switching */
:root {
  --bg: white;
  --text: black;
}

[data-theme="dark"] {
  --bg: black;
  --text: white;
}

body {
  background: var(--bg);
  color: var(--text);
}

/* Responsive spacing */
:root {
  --spacing-unit: 8px;
  --spacing-small: calc(var(--spacing-unit) * 2);
  --spacing-medium: calc(var(--spacing-unit) * 3);
  --spacing-large: calc(var(--spacing-unit) * 5);
}

/* Dynamic calculations */
:root {
  --base-size: 16px;
}

h1 {
  font-size: calc(var(--base-size) * 2.5);
}
```

---

## 14. Responsive Design & Media Queries

### What is a Media Query?

Media queries allow you to apply CSS based on device characteristics.

```css
/* Basic syntax */
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}

/* Min-width (mobile-first approach) */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
  }
}

/* Range */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Tablet styles */
}

/* Multiple conditions */
@media (max-width: 600px) and (orientation: portrait) {
  /* Mobile portrait */
}

/* Media types */
@media screen and (max-width: 600px) { }
@media print { }

/* Modern range syntax */
@media (width >= 768px) { }
@media (400px <= width <= 1000px) { }
```

### Common Breakpoints

```css
/* Mobile first approach */
/* Mobile: 0px - 767px (default styles) */

/* Tablet: 768px and up */
@media (min-width: 768px) { }

/* Desktop: 1024px and up */
@media (min-width: 1024px) { }

/* Large desktop: 1200px and up */
@media (min-width: 1200px) { }

/* Desktop first approach */
/* Desktop (default styles) */

/* Tablet: 1023px and down */
@media (max-width: 1023px) { }

/* Mobile: 767px and down */
@media (max-width: 767px) { }
```

**Resource**: [CSS-Tricks Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

### Responsive Design Best Practices

1. **Use relative units** (`rem`, `em`, `%`, `vw`, `vh`)
2. **Mobile-first approach** (min-width queries)
3. **Fluid typography** (`clamp()`, `calc()`)
4. **Flexible images** (`max-width: 100%`)
5. **Viewport meta tag**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 15. Modern CSS Features

### CSS Nesting

```css
/* Modern CSS (native nesting) */
.parent {
  color: red;

  .child1 {
    color: blue;

    span {
      color: green;
    }
  }

  /* Use & for parent reference */
  &:hover {
    color: purple;
  }

  & .child2 {
    color: yellow;
  }
}
```

### Logical Properties (Border-Block, Inline)

```css
/* Traditional */
.box {
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 2px solid red;
  border-bottom: 2px solid red;
}

/* Logical (respects writing mode) */
.box {
  margin-block: 10px;         /* top + bottom */
  margin-inline: 20px;        /* left + right */
  border-block: 2px solid red; /* top + bottom */
  border-inline: 1px solid blue; /* left + right */
  
  padding-block-start: 10px;  /* top in LTR, right in vertical */
  padding-block-end: 10px;    /* bottom in LTR, left in vertical */
}

/* Works with writing-mode */
.vertical {
  writing-mode: vertical-lr;
  margin-block: 20px;  /* Now affects left and right! */
}
```

### Other Modern Features

```css
/* aspect-ratio */
.video {
  aspect-ratio: 16 / 9;  /* Maintains ratio */
}

/* clamp() - Responsive sizing */
.title {
  font-size: clamp(1.5rem, 5vw, 3rem);
  /* min, preferred, max */
}

/* min(), max() */
.box {
  width: min(100%, 600px);  /* Smaller of the two */
  padding: max(20px, 2vw);  /* Larger of the two */
}

/* object-fit (for images) */
img {
  object-fit: cover;      /* Cover container */
  object-fit: contain;    /* Fit inside */
  object-fit: fill;       /* Stretch */
  object-position: center;
}

/* scroll-behavior */
html {
  scroll-behavior: smooth;
}

/* scroll-padding (for fixed headers) */
html {
  scroll-padding-top: 80px;
}

/* user-select */
.no-select {
  user-select: none;  /* Can't select text */
}

/* filter */
img {
  filter: blur(5px);
  filter: brightness(1.2);
  filter: contrast(1.5);
  filter: grayscale(100%);
  filter: blur(2px) brightness(1.1);
}

/* backdrop-filter */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

/* text-wrap */
h1 {
  text-wrap: balance;  /* Balanced line lengths */
  text-wrap: nowrap;
  text-wrap: wrap;
}
```

---

## 16. CSS Units

### What are the different CSS units?

**Absolute Units**:
```css
.absolute {
  width: 100px;   /* Pixels */
  width: 1cm;     /* Centimeters */
  width: 1in;     /* Inches */
  width: 1pt;     /* Points (1/72 inch) */
}
```

**Relative Units**:
```css
.relative {
  /* Font-relative */
  font-size: 1em;     /* Relative to parent font-size */
  font-size: 1rem;    /* Relative to root (html) font-size */
  
  /* Viewport-relative */
  width: 50vw;        /* 50% of viewport width */
  height: 100vh;      /* 100% of viewport height */
  font-size: 5vmin;   /* 5% of smaller dimension */
  font-size: 5vmax;   /* 5% of larger dimension */
  
  /* Percentage */
  width: 50%;         /* 50% of parent */
  
  /* Character-relative */
  width: 20ch;        /* Width of 20 "0" characters */
}
```

### em vs rem - What's the difference?

```css
/* Default browser font-size: 16px */

/* em: Relative to PARENT */
.parent {
  font-size: 20px;
}
.child {
  font-size: 1.5em;  /* 20px * 1.5 = 30px */
  padding: 1em;      /* 30px (based on own font-size) */
}

/* rem: Relative to ROOT (html) */
html {
  font-size: 16px;
}
.anywhere {
  font-size: 1.5rem; /* Always 16px * 1.5 = 24px */
  padding: 2rem;     /* Always 32px */
}
```

**Best Practice**: Use `rem` for consistency, `em` for component-scoped scaling

### Viewport units practical examples

```css
/* Full-screen hero */
.hero {
  height: 100vh;
  width: 100vw;
}

/* Responsive typography */
h1 {
  font-size: 5vw;  /* Scales with viewport */
  font-size: clamp(2rem, 5vw, 4rem);  /* Better: with limits */
}

/* Fixed aspect ratio */
.square {
  width: 50vw;
  height: 50vw;
}
```

---

## 17. Overflow & Text Handling

### Explain overflow properties

```css
.box {
  overflow: visible;   /* Default: content overflows */
  overflow: hidden;    /* Hide overflow */
  overflow: scroll;    /* Always show scrollbars */
  overflow: auto;      /* Show scrollbars when needed */
  
  /* Separate X and Y */
  overflow-x: hidden;
  overflow-y: scroll;
}

/* Modern: Separate properties */
.modern {
  overflow-x: auto;
  overflow-y: hidden;
}
```

### How to create scrollable containers?

```css
/* Vertical scroll */
.scroll-vertical {
  height: 300px;
  overflow-y: auto;
}

/* Horizontal scroll */
.scroll-horizontal {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

/* Custom scrollbars (webkit) */
.custom-scroll::-webkit-scrollbar {
  width: 10px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
```

### Text overflow and word breaking

```css
/* Single-line ellipsis */
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Word breaking */
.break {
  word-break: break-all;      /* Break anywhere */
  word-break: break-word;     /* Break at word boundary */
  overflow-wrap: break-word;  /* Modern property */
}

/* White space control */
.whitespace {
  white-space: normal;   /* Default: wrap normally */
  white-space: nowrap;   /* No wrapping */
  white-space: pre;      /* Preserve whitespace, no wrap */
  white-space: pre-wrap; /* Preserve whitespace, wrap */
  white-space: pre-line; /* Collapse whitespace, wrap */
}
```

---

## 18. Float & Clear

### How do floats work?

```css
.float-left {
  float: left;
  margin-right: 20px;
}

.float-right {
  float: right;
  margin-left: 20px;
}

.no-float {
  float: none;  /* Default */
}
```

### What is the clear property?

```css
.clear {
  clear: left;    /* Clear left floats */
  clear: right;   /* Clear right floats */
  clear: both;    /* Clear all floats */
  clear: none;    /* Default */
}
```

### Clearing floats (clearfix)

```css
/* Modern clearfix */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Alternative: overflow method */
.container {
  overflow: hidden;  /* Creates BFC, contains floats */
}
```

**Note**: Floats are legacy. Use **Flexbox** or **Grid** for modern layouts.

---

## 19. CSS Specificity & Inheritance

### How does CSS specificity work?

Specificity determines which CSS rule applies when multiple rules target the same element.

**Specificity hierarchy** (from lowest to highest):
1. **Type selectors** & **pseudo-elements**: `div`, `::before` → `(0,0,1)`
2. **Class selectors**, **attributes**, **pseudo-classes**: `.class`, `[type]`, `:hover` → `(0,1,0)`
3. **ID selectors**: `#id` → `(1,0,0)`
4. **Inline styles**: `style=""` → `(1,0,0,0)`
5. **!important**: Overrides everything

```css
/* Specificity: (0,0,1) */
p { color: red; }

/* Specificity: (0,1,0) */
.text { color: blue; }

/* Specificity: (0,1,1) */
p.text { color: green; }

/* Specificity: (1,0,0) */
#special { color: purple; }

/* Specificity: (1,1,1) */
#special.text p { color: orange; }
```

**Calculator**: `(IDs, Classes/Attributes/Pseudo-classes, Elements/Pseudo-elements)`

### When should you use `!important`?

```css
.element {
  color: red !important;
}
```

**Use cases** (rare):
- Overriding third-party CSS
- Utility classes that should never be overridden
- Quick debugging (remove after)

**Why avoid**:
- Hard to override
- Breaks natural cascade
- Makes debugging difficult
- Sign of poor CSS architecture

**Better alternatives**:
- Increase specificity
- Reorganize CSS order
- Use more specific selectors

### What are CSS Global Values?

```css
.element {
  /* inherit: Takes value from parent */
  color: inherit;
  
  /* initial: Uses default CSS value */
  font-size: initial;
  
  /* unset: inherit if inheritable, initial otherwise */
  margin: unset;
  
  /* revert: Reverts to browser default */
  border: revert;
  
  /* all: Apply to all properties */
  all: unset;  /* Reset everything */
}
```

---

## 20. Advanced Interview Questions

### 1. What is the difference between `reset.css` and `normalize.css`?

- **Reset.css**: Removes all default browser styles (aggressive)
- **Normalize.css**: Preserves useful defaults, fixes inconsistencies (gentle)

**Modern approach**: Use neither, or use a minimal reset with `box-sizing`

### 2. What is a CSS preprocessor?

Tools that extend CSS with features like variables, nesting, mixins, functions.

**Examples**: Sass, Less, Stylus

**Features**:
- Variables
- Nesting
- Mixins (reusable code blocks)
- Functions
- Imports
- Math operations

**Note**: Many features now native in CSS (variables, nesting, calc)

### 3. What is BEM methodology?

**BEM** = Block Element Modifier

```css
/* Block */
.card { }

/* Element (part of block) */
.card__title { }
.card__image { }

/* Modifier (variation) */
.card--featured { }
.card__title--large { }
```

**Benefits**:
- Clear naming convention
- Avoids specificity issues
- Self-documenting code
- Component-based

### 4. How do you center a div?

```css
/* Flexbox (modern, recommended) */
.parent {
  display: flex;
  justify-content: center;  /* Horizontal */
  align-items: center;      /* Vertical */
}

/* Grid */
.parent {
  display: grid;
  place-items: center;  /* Both axes */
}

/* Absolute positioning */
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Margin auto (horizontal only) */
.child {
  width: 300px;
  margin: 0 auto;
}
```

### 5. What is Critical CSS?

**Critical CSS** is the minimum CSS needed to render above-the-fold content.

**Strategy**:
1. Inline critical CSS in `<head>`
2. Load full CSS asynchronously
3. Improves perceived performance

```html
<head>
  <style>
    /* Critical CSS inlined */
    .header { ... }
    .hero { ... }
  </style>
  <link rel="preload" href="full.css" as="style" onload="this.rel='stylesheet'">
</head>
```

### 6. What is the CSS paint order?

Elements are painted in this order:
1. Background
2. Border
3. Content (text, images)
4. Outline

### 7. What are vendor prefixes and why are they needed?

Vendor prefixes allow browsers to implement experimental features.

```css
.element {
  -webkit-transform: rotate(45deg);  /* Chrome, Safari */
  -moz-transform: rotate(45deg);     /* Firefox */
  -ms-transform: rotate(45deg);      /* IE */
  -o-transform: rotate(45deg);       /* Opera */
  transform: rotate(45deg);          /* Standard */
}
```

**Modern approach**: Use **Autoprefixer** to add automatically

### 8. What is a CSS sprite?

Combining multiple images into one file to reduce HTTP requests.

```css
.icon {
  background: url('sprites.png') no-repeat;
}

.icon-home {
  background-position: 0 0;
}

.icon-user {
  background-position: -20px 0;
}
```

**Modern alternative**: SVG sprites, icon fonts, or inline SVG

### 9. What is the CSS `calc()` function?

Perform calculations in CSS:

```css
.element {
  width: calc(100% - 80px);
  font-size: calc(16px + 2vw);
  margin: calc(var(--spacing) * 2);
  
  /* Mix units */
  height: calc(100vh - 50px);
}
```

### 10. How do you handle CSS for print?

```css
@media print {
  /* Hide navigation, ads */
  .nav, .ads, .footer {
    display: none;
  }
  
  /* Use print-friendly colors */
  body {
    color: black;
    background: white;
  }
  
  /* Show URLs for links */
  a::after {
    content: " (" attr(href) ")";
  }
  
  /* Page breaks */
  h1, h2 {
    page-break-after: avoid;
  }
  
  /* Expand widths */
  .container {
    width: 100%;
    max-width: none;
  }
}
```

### 11. What is the Stacking Order (without z-index)?

Natural stacking order (bottom to top):
1. Root element background
2. Positioned elements with negative `z-index`
3. Non-positioned block elements (in source order)
4. Positioned elements with `z-index: auto` or `z-index: 0`
5. Positioned elements with positive `z-index`

### 12. What is CSS containment?

```css
.element {
  contain: layout;  /* Layout isolated */
  contain: paint;   /* Paint isolated */
  contain: size;    /* Size isolated */
  contain: style;   /* Style isolated */
  contain: strict;  /* All containment */
  contain: content; /* layout + paint */
}
```

**Benefits**: Performance optimization for independent components

### 13. What are CSS Houdini APIs?

Low-level APIs that expose parts of the CSS rendering engine:
- Paint API
- Layout API
- Animation API
- Properties & Values API

**Example**: Create custom properties with types
```css
@property --my-color {
  syntax: '<color>';
  initial-value: #000;
  inherits: false;
}
```

---

## 🧪 Practice Resources

- **Frontend Mentor** - Real-world projects
- **Elzero Web School** - Arabic tutorials
- **CodePen** - Experiments and examples
- **CSS Battle** - CSS challenges
- **Can I Use** - Browser compatibility
- **CSS-Tricks** - Articles and guides

---

## 🎯 Study Tips

1. **Practice daily** - Build real projects
2. **Use DevTools** - Inspect and experiment
3. **Read specifications** - MDN, W3C
4. **Stay updated** - Follow CSS Working Group
5. **Master Flexbox & Grid** - Essential modern skills
6. **Understand specificity** - Avoid `!important`
7. **Think mobile-first** - Better responsive design
8. **Use semantic class names** - BEM or similar
9. **Optimize performance** - Critical CSS, reduce reflows
10. **Test cross-browser** - Don't assume compatibility

---

**Remember**: CSS is about practice. The more you code, the better you get! 🚀
