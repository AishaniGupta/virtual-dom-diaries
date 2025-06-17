```markdown
# Questions

* Is JSX mandatory for React?
* Is ES6 mandatory for React?
* `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
* How can I write comments in JSX?
* What is `<React.Fragment></React.Fragment>` and `<></>`?
* What is Reconciliation in React?
* What is React Fiber?
* Why do we need keys in React?
* Can we use index as keys in React?
* What is props in React? Ways to use?
* What is Config Driven UI?

---

# React Concepts – Q&A

## 1. Is JSX mandatory for React?
**No**, JSX is not mandatory for using React. JSX is a syntax extension that makes writing React components more intuitive by allowing HTML-like code within JavaScript. However, you can also use `React.createElement()` directly, though it's more verbose.

**Example without JSX:**
```js
const element = React.createElement('h1', null, 'Hello World');
```

## 2. Is ES6 mandatory for React?
No, ES6 is not mandatory, but it is highly recommended. Most modern React codebases use ES6+ features like arrow functions, destructuring, `let`/`const`, classes, template literals, etc., which improve code readability and maintainability.

## 3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX
* `{TitleComponent}`: Refers to the function or component itself, not rendering it.
* `{<TitleComponent/>}`: Renders the component using self-closing tag syntax.
* `{<TitleComponent></TitleComponent>}`: Also renders the component, equivalent to the above, used when children are passed.

## 4. How can I write comments in JSX?
Use curly braces with JavaScript-style comments inside JSX:

```jsx
{/* This is a JSX comment */}
<div>Hello World</div>
```

## 5. What is `<React.Fragment></React.Fragment>` and `<></>`?
Both allow you to return multiple JSX elements without adding an extra node to the DOM.

```jsx
<React.Fragment>
  <h1>Hello</h1>
  <p>World</p>
</React.Fragment>
```
Or shorthand syntax:

```jsx
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

## 6. What is Reconciliation in React?
Reconciliation is the process by which React updates the DOM by comparing the previous and current virtual DOM trees. React calculates the minimal set of changes (diffing) and efficiently updates only what’s necessary.

## 7. What is React Fiber?
React Fiber is the new reconciliation engine in React (as of version 16+). It enables features like:
* Incremental rendering
* Prioritization of updates
* Pausing and resuming rendering
* Better error handling

It improves performance and responsiveness in complex applications.

## 8. Why do we need keys in React?
Keys help React identify which items in a list have changed, are added, or are removed. They improve rendering performance and prevent UI bugs by providing a stable identity for list elements.

```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

## 9. Can we use index as keys in React?
Yes, but it's not recommended unless:
* The list is static and does not change over time.
* No items are reordered or filtered.

Using index can cause issues like incorrect component state retention during reordering or dynamic updates.

## 10. What is props in React? Ways to use?
Props (short for properties) are inputs to components that allow data to be passed from parent to child components.

**Example:**
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
**Destructuring props:**
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```
**Usage:**
```jsx
<Greeting name="Gauri" />
```

## 11. What is Config Driven UI?
Config Driven UI is a design approach where the UI is rendered based on configuration or data instead of hardcoded layouts. It separates logic from presentation and is especially useful in dynamic, scalable apps.

**Benefits:**
* Easily customizable
* Flexible layouts
* Faster iterations

**Example:**
```js
const formConfig = [
  { type: "text", label: "Name" },
  { type: "email", label: "Email" },
  { type: "submit", label: "Submit" }
];
```
Use this config to generate UI elements dynamically.
```