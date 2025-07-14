
# 🧠 Why React?

- Everything you can do with React (or other frameworks) can be done with HTML, CSS, and JS.
- But using a framework like React improves **developer experience**:
  - Less code, faster updates.
  - Better maintainability.
- React provides **superpowers** to build production-ready, scalable, performant apps.
- Helps in **optimization** and **component-based structure**.

---

# 📁 React File Structure

- Best practice: separate files and components logically.
- Create a `src/` folder as the main source directory.
- Inside `src/`, create a `components/` folder.
- Move UI components like `Header.js`, `Body.js`, `RestaurantCard.js` into `components/`.

---

# 📤 Export & Import

### ✅ Default Export

```js
export default ComponentName;
import ComponentName from './ComponentName';
````

Only one default export per file.

### ✅ Named Export

```js
export const varName = value;
import { varName } from './file';
```

Multiple named exports allowed.
You cannot have more than one default export.
You can mix default and named exports (technically allowed, but use with care).

### 📁 Utils Folder Setup

  - Create a `utils/` folder for utility files.
  - Add `constants.js` for constants, and `MockData.js` for mock data.
  - Export data like `resList` and import it wherever needed.

-----

# ⚙ React Program Flow

  - Component files: `Header.js`, `Body.js`, `RestaurantCard.js`
  - Utility files: `constants.js`, `MockData.js`
  - All components and utilities are imported and assembled in `App.js`

-----

# 🖱 Event Handling in React

Use `onClick` in JSX like this:

```jsx
onClick={() => console.log('Clicked!')}
```

-----

# ⚡ React Superpowers

  - Clear separation of UI Layer and Data Layer
  - **Virtual DOM**: JavaScript object representing the real DOM
  - **Diff Algorithm**: Efficiently compares VDOMs
  - **Reconciliation**: Applies only necessary DOM changes
  - React is fast because of minimal and optimized DOM manipulation

-----

# ⚓ React Hooks

Hooks allow function components to manage state and side effects.

### 🔁 useState Hook

```js
const [state, setState] = useState(initialValue);
```

  - `useState` returns an array: `[value, setterFunction]`
  - Changing state causes re-render
  - Commonly used for creating interactive/dynamic components

### 🧠 What is a Hook?

  - A hook is a normal JS function provided by React
  - Contains some logic written by Meta engineers
  - Comes from `react` module
  - Example: `useState()`, `useEffect()`

-----

# 🧬 How React Works Internally

### Reconciliation Algorithm

  - React builds a Virtual DOM from UI structure.
  - This is a nested JS object mimicking actual DOM.
  - When state or props change, a new Virtual DOM is created.
  - React compares the old and new VDOMs to find the difference.

### Diff Algorithm

  - Identifies differences between two Virtual DOMs.
  - Efficiently updates the actual DOM based on changes.
  - Avoids full re-rendering of the page.

### 🧵 React Fiber

  - Modern rendering engine in React.
  - Enables:
      - Incremental rendering
      - Splitting render work into chunks
      - Better scheduling and responsiveness
  - Helps React perform better on large applications.

-----

# ✨ Why React is Popular

  - Component-based architecture
  - Reusable UI pieces
  - Fast rendering via Virtual DOM
  - Rich developer tools
  - Backed by Meta and a huge community

-----

# 🧪 Example Code: useState

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

-----

# 🔁 Recap

  - JSX vs Vanilla JS
  - Component-based structure and modularity
  - Export/Import (default and named)
  - Folder structure for scalability
  - Virtual DOM, Diff Algorithm, Reconciliation
  - React Fiber architecture
  - React Hooks (`useState`) and their role in functional components

```
```