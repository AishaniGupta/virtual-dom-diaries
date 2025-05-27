# Questions

What is JSX?
Superpowers of JSX.
Role of type attribute in script tag? What options can I use there?
{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

---

## 🧾 What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in React. It allows you to write HTML-like code inside JavaScript. JSX makes the structure of the UI easier to visualize and more declarative.

Instead of writing:

```js
React.createElement("h1", {}, "Hello World");
```

You can simply write:

```jsx
<h1>Hello World</h1>
```

Under the hood, JSX gets **transpiled** to regular JavaScript using tools like **Babel**.

---

## ⚡ Superpowers of JSX

JSX brings several advantages that make React development smoother:

1. **Declarative UI**: You can describe what the UI should look like in a simple, readable format.
2. **JavaScript Integration**: You can embed JavaScript expressions inside JSX using `{}`.

   ```jsx
   const name = "React";
   <h1>Hello, {name}</h1>
   ```
3. **Component Composition**: JSX allows nesting components like regular HTML tags.

   ```jsx
   <Header />
   ```
4. **Conditional Rendering**: You can use ternary operators, short-circuiting, etc., right inside JSX.

   ```jsx
   {isLoggedIn ? <Dashboard /> : <Login />}
   ```
5. **Prevents XSS (Cross-Site Scripting)**: React escapes everything embedded in JSX before rendering.

---

## 🔖 Role of `type` Attribute in `<script>` Tag

The `type` attribute tells the browser what kind of code is inside the `<script>` tag.

### Common `type` Values:

| Type Value         | Meaning                                                  |
| ------------------ | -------------------------------------------------------- |
| `text/javascript`  | Default for JavaScript (can be omitted in modern HTML5). |
| `module`           | Indicates an ES6 module, allows `import/export`.         |
| `application/json` | Used when embedding JSON in HTML (non-executing).        |
| `text/babel`       | For JSX/Babel code (often used in playgrounds).          |
| `text/html`        | Treats the script contents as plain HTML (rare use).     |

### Example: ES6 Module

```html
<script type="module">
  import { myFunc } from './utils.js';
  myFunc();
</script>
```

---

## 🧠 `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

Let’s break it down:

### ✅ `{<TitleComponent />}` or `{<TitleComponent></TitleComponent>}`

* These are **correct ways** to use a **React component instance** inside JSX.
* Both forms are equivalent; the first is self-closing, the second is not.

```jsx
const App = () => {
  return <div>{<TitleComponent />}</div>;
};
```

### ❌ `{TitleComponent}`

* This refers to the **component function itself**, not its return value.
* You’d use this only when you want to pass the component as a **reference**, not render it.

```jsx
// Good: referencing, not rendering
<MyWrapper component={TitleComponent} />
```

### Summary Table:

| Expression                            | Meaning                                  | When to Use                                    |
| ------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| `{<TitleComponent />}`                | Renders the component                    | ✅ Normal JSX usage                             |
| `{<TitleComponent></TitleComponent>}` | Same as above                            | ✅ Optional alternative syntax                  |
| `{TitleComponent}`                    | Just refers to the function/class itself | ⚠️ Use when passing as a prop or for HOC logic |

---

