## 1. Setting Up the Development Environment

### Tool Used: **Visual Studio Code (VS Code)**

### Steps:

* **Install VS Code** from [https://code.visualstudio.com](https://code.visualstudio.com)
* **Install Extensions**:

  * **Live Server**: Instantly preview web pages.
  * **Prettier**: Code formatter.
  * **ESLint**: JavaScript code linter.
* **Recommended Settings**:

  * Enable autosave
  * Format on save (`editor.formatOnSave: true`)

### Why VS Code?

* Lightweight
* Excellent extension support
* Integrated terminal and Git

---

## 2. Hello World with HTML

### Code Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello HTML</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

### Concepts Covered:

* HTML page structure: `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`
* The `<h1>` tag: Used to display a top-level heading.

---

## 3. Hello World with Vanilla JavaScript

### Code Example:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="greeting"></h1>

    <script>
      document.getElementById("greeting").innerText = "Hello World with JavaScript";
    </script>
  </body>
</html>
```

### Concepts Covered:

* DOM (Document Object Model): JavaScript can access and manipulate HTML elements.
* `document.getElementById()`: Finds an element by its ID.
* `innerText`: Updates the text content of the element.

---

## 4. Understanding CDN (Content Delivery Network)

### What is a CDN?

* A **CDN** is a network of servers that deliver files (like JS libraries) quickly from a nearby location.
* CDNs allow us to **use libraries** like React without installing anything locally.

### Example CDN Links for React:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

### Notes:

* `react.development.js` – core React library
* `react-dom.development.js` – allows rendering to the DOM
* `babel.min.js` – transpiles JSX into plain JavaScript

---

## 5. Hello World in React (without JSX)

### Code Example:

```html
<body>
  <div id="root"></div>

  <script>
    const heading = React.createElement("h1", {}, "Hello React");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
  </script>
</body>
```

### Concepts Covered:

* `React.createElement(type, props, children)`:

  * Creates a virtual DOM element.
* `ReactDOM.createRoot(...).render(...)`:

  * Renders the element into the actual DOM.

---

## 6. Nested Elements in React

### Code Example:

```js
const parent = React.createElement("div", {},
  React.createElement("h1", {}, "Title"),
  React.createElement("p", {}, "This is a paragraph.")
);
root.render(parent);
```

### Concepts:

* React elements can be nested.
* Child elements are passed as additional arguments or arrays.

---

## 7. Array of Children in React

### Code Example:

```js
const list = React.createElement("ul", {}, [
  React.createElement("li", {}, "Item 1"),
  React.createElement("li", {}, "Item 2"),
  React.createElement("li", {}, "Item 3")
]);
root.render(list);
```

### Why use arrays?

* Efficient for rendering lists or multiple similar elements.

---

## 8. Introduction to JSX (JavaScript XML)

### Why Use JSX?

* `React.createElement()` is **verbose and hard to read**.
* JSX looks like HTML and is more **developer-friendly**.

### JSX Example:

```jsx
const heading = <h1>Hello from JSX</h1>;
```

### Note:

* JSX must be transpiled by Babel.
* Code using JSX must be wrapped in:

```html
<script type="text/babel">
  // JSX code here
</script>
```

### Advantages of JSX:

* Clear syntax
* Better readability
* Easier to write and maintain UI

---

## 9. React: Library vs Framework

### React is a **Library**, not a Framework

| Feature           | React (Library)      | Framework (e.g., Angular)  |
| ----------------- | -------------------- | -------------------------- |
| Structure         | Minimal, flexible    | Opinionated, rigid         |
| Control Flow      | Developer-controlled | Framework-controlled       |
| Features Included | Only UI rendering    | UI + Routing + HTTP + More |
| Flexibility       | High                 | Limited                    |
| Learning Curve    | Moderate             | Steep                      |

---

## 10. Advantages of React

* **Component-Based Architecture**: Reusable and independent pieces of UI.
* **Virtual DOM**: Efficient DOM manipulation.
* **JSX Syntax**: Easier to create UI elements.
* **One-Way Data Binding**: Predictable and easy to debug.
* **Rich Ecosystem**: Tools like Redux, React Router, etc.
* **Large Community Support**: Tons of resources and libraries.

---

## 11. Summary of Key Concepts

* HTML and JavaScript Hello World programs
* Use of CDN to include React and Babel
* React without JSX using `React.createElement`
* Nested React elements and arrays of children
* Introduction and benefits of JSX
* Understanding how React is different from frameworks
* React’s key features and strengths
