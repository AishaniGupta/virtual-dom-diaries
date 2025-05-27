
## 🛠 Project Setup & Starting with npm

### Terminal Commands to Start the Project

* Begin a project using the terminal.
* Navigate to your project folder and initialize:

  ```bash
  npm init -y
  ```

### Creating npm Scripts

* To simplify development, add a custom script in `package.json`:

  ```json
  "scripts": {
    "start": "npx parcel index.html"
  }
  ```
* Run the script using:

  ```bash
  npm start
  ```

### Tips When Joining a New Company

* Check `package.json` for dependencies and scripts.
* Understand the entry point (often `index.html`, `index.js`, or `main.js`).
* Look at existing scripts like `start`, `build`, `test`, etc.
* Install dependencies:

  ```bash
  npm install
  ```

---

## ⚛ JSX (JavaScript XML)

### What is JSX?

* JSX is a syntax extension for JavaScript, used with React to describe what the UI should look like.
* It looks like HTML but gets compiled to `React.createElement()`.

Example:

```jsx
const heading = <h1>Hello React</h1>;
```

### Why JSX?

* It’s more readable.
* Helps define the UI structure clearly.
* Easier to visualize the UI component tree.

---

## 🔄 Transpiling JSX with Babel

### What is Babel?

* Babel is a JavaScript compiler that converts JSX into vanilla JavaScript.

* Example JSX:

  ```jsx
  const title = <h1>Hello World</h1>;
  ```

  gets transpiled to:

  ```js
  const title = React.createElement("h1", {}, "Hello World");
  ```

* Babel ensures compatibility with older browsers by converting modern JavaScript features into ES5.

---

## 🔤 `class` vs `className`

* In JSX, use `className` instead of `class` to define CSS classes:

  ```jsx
  <div className="container"></div>
  ```

---

## 🔌 Useful VS Code Extensions for React Development

* **Prettier**: Auto-formats your code.
* **Bracket Pair Colorization**: Helps visualize matching brackets.
* **ESLint**: Helps identify and fix linting errors.
* **Better Comments**: Color-codes comments for clarity.

---

## 🧩 React Components

### Two Ways to Write Components:

1. **Class-based Components**

   ```jsx
   class Welcome extends React.Component {
     render() {
       return <h1>Hello, class!</h1>;
     }
   }
   ```

2. **Functional Components**

   ```jsx
   const Welcome = () => <h1>Hello, function!</h1>;
   ```

### Nested Functional Components

* You can define components inside components:

  ```jsx
  const Outer = () => {
    const Inner = () => <h2>Inner Component</h2>;
    return (
      <div>
        <Inner />
      </div>
    );
  };
  ```

---

## 🧱 React Elements & Rendering

### What is a React Element?

* A lightweight description of what the UI should look like.

  ```jsx
  const title = <h1>Hello JSX</h1>;
  ```

### Rendering to the DOM

* Use `root.render()` to render an element:

  ```jsx
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  ```

---

## 🧬 Component Composition

* Use one component inside another:

  ```jsx
  const Header = () => <h1>Header</h1>;
  const Layout = () => (
    <div>
      <Header />
      <p>Main Content</p>
    </div>
  );
  ```

---

## 🧾 Alternative Ways to Define Components

* Without arrow functions:

  ```jsx
  function Greeting() {
    return <h1>Hello!</h1>;
  }
  ```

---

## 🧠 React Concepts Deep Dive

### React Element Inside Component

```jsx
const element = <h1>Hello</h1>;

const App = () => (
  <div>
    {element}
  </div>
);
```

### React Element Inside Another Element

```jsx
const child = <span>Child</span>;
const parent = <div>{child}</div>;
```

---

## 🔐 JSX Expressions & Security

* You can use any valid JS expression inside JSX using curly braces:

  ```jsx
  const name = "React";
  <h1>{name}</h1>
  ```

### Cross-Site Scripting (XSS)

* React escapes values embedded in JSX before rendering them. This helps prevent XSS attacks by default.

---

## 🧩 React Fragments

* Used to group elements without adding extra nodes to the DOM:

  ```jsx
  <>
    <h1>Heading</h1>
    <p>Paragraph</p>
  </>
  ```

---

## 📦 Recap of Key Takeaways

* Initialize and set up a React project using terminal and npm.
* Create meaningful scripts in `package.json` to boost dev workflow.
* Use JSX to write declarative UI.
* Babel transpiles JSX and ES6+ code into browser-compatible JavaScript.
* Learn the difference between class and className in JSX.
* Understand functional and class-based components.
* Master component nesting, rendering, and composition.
* Know how React protects against XSS and how expressions are embedded safely.
* Use helpful VS Code extensions to improve development speed and quality.

---
