
# Questions

* What is Emmet?
* Difference between a Library and Framework?
* What is CDN? Why do we use it?
* Why is React known as React?
* What is crossorigin in script tag?
* What is difference between React and ReactDOM?
* What is difference between react.development.js and react.production.js files via CDN?
* What is async and defer?


## 1. What is Emmet?

Emmet is a plugin built into most modern code editors (like VS Code) that allows developers to write shorthand syntax that expands into full HTML or CSS code.

**Example:**

Typing `!` and pressing Tab in an HTML file auto-generates a full HTML boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
</body>
</html>
````

**Benefit:**

* Speeds up coding
* Reduces repetitive typing

---

## 2. Difference Between a Library and a Framework

| Aspect         | Library (e.g., React)                 | Framework (e.g., Angular)            |
| -------------- | ------------------------------------- | ------------------------------------ |
| Control Flow   | You call the library functions        | Framework calls your code            |
| Flexibility    | More flexible – pick and choose tools | Less flexible – follows strict rules |
| Scope          | Focused on specific tasks             | Full-fledged solution (UI, routing)  |
| Learning Curve | Generally easier                      | Steeper                              |

---

## 3. What is CDN? Why Do We Use It?

A CDN (Content Delivery Network) is a globally distributed network of servers that delivers files like JS, CSS, and images from a nearby location to the user.

**Why Use CDN:**

* Faster loading time
* No need to download or install libraries
* Useful for prototyping or learning (e.g., using React via CDN)

---

## 4. Why is React Known as React?

React is named for its "reactive" behavior — it automatically reacts to changes in application state by efficiently updating and rendering the user interface using a virtual DOM.

---

## 5. What is `crossorigin` in `<script>` Tag?

The `crossorigin` attribute is used to handle CORS (Cross-Origin Resource Sharing) when loading scripts from a different domain.

**Example:**

```html
<script src="https://example.com/script.js" crossorigin></script>
```

**Purpose:**

* Needed when scripts require credentials or error reporting
* Important when using CDNs or analytics tools

---

## 6. Difference Between React and ReactDOM

| Feature     | React                                | ReactDOM                             |
| ----------- | ------------------------------------ | ------------------------------------ |
| Purpose     | Core library for building components | Renders components to the DOM        |
| Used For    | Creating UI elements                 | Attaching those elements to the page |
| Import From | `react` package                      | `react-dom` package                  |

**Example:**

```js
const element = React.createElement("h1", {}, "Hello");
ReactDOM.createRoot(document.getElementById("root")).render(element);
```

---

## 7. Difference Between `react.development.js` and `react.production.js`

| File                 | Purpose                                | Use Case    |
| -------------------- | -------------------------------------- | ----------- |
| react.development.js | Includes extra warnings and errors     | Development |
| react.production.js  | Minified and optimized for performance | Production  |

**Summary:**

* Development: For learning and debugging
* Production: For deployment (smaller size and faster load)

---

## 8. What is `async` and `defer` in `<script>` Tags?

Both attributes allow JavaScript files to be downloaded without blocking HTML parsing.

| Attribute | Script Loading        | Execution Timing                    |
| --------- | --------------------- | ----------------------------------- |
| async     | Downloads in parallel | Executes as soon as it's downloaded |
| defer     | Downloads in parallel | Executes after HTML is fully parsed |

**Example:**

```html
<script src="script.js" async></script>
<script src="script.js" defer></script>
```

**Use `defer` when:**

* You want scripts to execute in order after the document is parsed
* Ideal for frameworks like React

