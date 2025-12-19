# Comprehensive Accessibility Interview Q&A

This guide covers frequently asked accessibility questions for HTML and front-end engineering interviews. It features detailed explanations, comparison tables, code examples, and best practices for real-world front-end development.

---

## 1. What is ARIA and when should you use it?

**ARIA** (Accessible Rich Internet Applications) is a set of attributes that improve the accessibility of web content and web applications, especially for people using assistive technologies (like screen readers).

### When to Use ARIA
- **Custom UI Components:** When native HTML cannot convey semantic meaning (e.g., custom dropdowns, modals).
- **State & Property Indication:** To expose states (like `aria-checked`, `aria-expanded`) and roles (like `role="dialog"`).
- **Not in Place of Semantics:** Do **not** use ARIA when native elements suffice. Native HTML elements are always preferred.

| Native Element              | ARIA Equivalent Example              |
|----------------------------|--------------------------------------|
| `<button>`                 | `<div role="button">`               |
| `<ul>` / `<li>`            | `<div role="list">/<div role="listitem">` |
| `<a href=...>`             | `<span role="link">`                |

**Use native elements whenever possible!**

#### Code Example: Good vs Bad

**Bad:**
```html
<div role="button" onclick="doSomething()">Submit</div>
```

**Good:**
```html
<button onclick="doSomething()">Submit</button>
```

---

## 2. Why is the `<label>` element important?

The `<label>` element links description text to form controls, improving:
- Usability (clicking label focuses input)
- Accessibility (screen readers associate label with control)
- Compliance (WCAG, Section 508)

**Always associate labels with their controls:**

```html
<label for="username">Username</label>
<input id="username" name="username" type="text">
```

Or using `label` nesting:

```html
<label>Username
  <input name="username" type="text">
</label>
```

**Avoid:**
- Omitting the label or using placeholder text only

---

## 3. Semantic Tags vs. ARIA Roles

### Semantic HTML Advantages
- Communicates structure natively to browsers and assistive tech
- No extra attributes needed

### When to Use ARIA Roles
- When no appropriate semantic element exists

| Structural Purpose         | Semantic Tag         | ARIA Role Equivalent    |
|---------------------------|----------------------|------------------------|
| Navigation                | `<nav>`              | `role="navigation"`   |
| Main Content              | `<main>`             | `role="main"`         |
| Article/Blog              | `<article>`          | `role="article"`      |
| Button                    | `<button>`           | `role="button"`       |
| Heading                   | `<h1>`-`<h6>`        | `role="heading"`      |

**Best Practice:** Use semantic tags first, ARIA roles only when needed!

---

## 4. Making Tables Accessible

Accessible tables help screen reader users understand relationships between data.

### Key Practices
- **Always use `<th>` for headers** (and scope them properly)
- **Add `scope` attribute** for header cells (`row`, `col`)
- **Use `<caption>`** to describe the table’s purpose
- **Keep tables simple** when possible

#### Example:
```html
<table>
  <caption>Monthly Sales Data</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
    </tr>
  </tbody>
</table>
```

---

## 5. Role of the `<head>` Tag and “Hidden” Accessibility Elements

### `<head>` Tag: Why It Matters
- Contains crucial metadata (e.g., `<title>`, `<meta>`, `<link>`)
- The `<title>` element is vital for assistive technology—it’s read aloud when a page loads
- Use descriptive, unique page titles and accurate language attributes

```html
<head>
  <title>Dashboard - Sales Analytics</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

### Hidden Elements and Accessibility
- Use `aria-hidden="true"` (removes elements from assistive tech navigation)
- Don’t hide important content
- For visually hidden but accessible text, use utility classes:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
```

```html
<button>
  Search <span class="sr-only">site content</span>
</button>
```

---

## 6. Top 8 Accessibility Best Practices for HTML

1. **Use Semantic HTML** – Prefer `<nav>`, `<main>`, `<article>`, etc.
2. **Always Label Inputs** – With the `<label>` element
3. **Ensure Sufficient Color Contrast** – Minimum 4.5:1 for small text
4. **Test Keyboard Navigation** – All interactive content should be reachable by Tab
5. **Provide Useful Alt Text for Images** – Describe function and content
6. **Don’t Use Only Color to Convey Meaning** – Use icons/text
7. **Avoid Using `tabindex` > 0** – Follow natural tab order
8. **Use Landmarks/Regions** – For quick navigation (e.g., `<header>`, `<footer>`, `<main>`, `<nav>`)

---

## 7. Practical Summary Table: Use of ARIA vs HTML

| Need                                  | Prefer HTML/Native | Prefer ARIA        |
|----------------------------------------|--------------------|--------------------|
| Button                                | `<button>`         | `<div role="button">` (if absolutely needed) |
| Section Heading                       | `<h1>`-`<h6>`      | `role="heading"`  |
| List                                  | `<ul>`, `<ol>`, `<li>` | `role="list"`, `role="listitem"` |
| Simple Table                          | `<table>`, `<th>`  | ARIA attributes (complex tables only) |
| Landmark Regions                      | `<nav>`, `<main>`, `<aside>`, `<header>` | `role="navigation"` (if custom) |

---

## 8. Top Accessibility Resources

- [WebAIM: Quick Reference](https://webaim.org/resources/quickref/)
- [MDN: ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [Deque University](https://dequeuniversity.com/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

---

**Tip:** Learn to use browser accessibility tools and screen readers in practice!