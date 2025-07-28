## ⚙️ Application Architecture

### Monolith vs Microservices

* **Monolith Architecture:** Everything (UI, logic, DB access) is in one large codebase. This makes it difficult to maintain and scale. A small change can require redeploying the entire application.
* **Microservices Architecture:** The application is split into smaller, independently deployable services (e.g., Auth, Order, UI). This promotes modularity, scalability, and better separation of concerns.

### Separation of Concerns

This principle encourages organizing code so that each part handles a specific responsibility (e.g., UI logic, API communication, state management). This keeps the code clean, maintainable, and easier to test.

### UI as a Microservice

The frontend can be treated as a standalone microservice that fetches data from backend APIs. This enables independent development, versioning, and deployment.

---

## ⚛️ React Hooks & State

### `useState()` – Managing Component State

`useState()` allows you to store and manage local state in a functional component. It's useful for toggling UI, storing user input, managing counters, etc.

```javascript
const [count, setCount] = useState(0);
````

Any update to state causes re-rendering of the component.

### `useEffect()` – Side Effects

This hook is used to perform side effects (like API calls, timers, or DOM updates) in functional components. It runs after the render and can include a cleanup function.

```javascript
useEffect(() => {
  fetchData();
}, []);
```

-----

## 🔗 Fetching Data & API Calls

### `fetch()` and Promises

`fetch()` is used to make API calls. It returns a **Promise** which can be handled with `.then()` or `async/await`.

```javascript
const getData = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  setData(data);
};
```

### Modern Syntax with `async/await`

This provides a cleaner, easier-to-read syntax and reduces nesting compared to `.then()` chains.

-----

## 🌐 Working with Live APIs & CORS

### Switching from Mock Data

We removed static `MockData.js` and fetched real-time API data for dynamic rendering.

### CORS (Cross-Origin Resource Sharing)

CORS is a browser security feature that blocks requests to different domains unless explicitly permitted by server headers. During development, a CORS extension can temporarily bypass this limitation.

-----

## 💡 UI Loading Experience

### Spinning Loader & Shimmer UI

**Spinners** show users that content is loading, while **Shimmer UI** mimics the layout of content while it's still loading, improving perceived performance.

### Shimmer Component

A React component can be created with an animated skeleton UI using CSS.

```css
@keyframes shimmer {
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
}
```

-----

## 🔀 Conditional Rendering

### With `? :` (Ternary Operator)

Used to render different components based on state.

```javascript
{isLoggedIn ? <Logout /> : <Login />}
```

### Real-World Examples

  * Show shimmer when data is loading.
  * Show actual content once loaded.

-----

## 🔎 Search Functionality

### Building a Search Box

This involves an input field with an `onChange` handler to update the search text, and a filtered list based on the entered query.

```javascript
<input onChange={(e) => setSearchText(e.target.value)} />
```

### Improving Search with `toLowerCase()`

This makes the search case-insensitive.

```javascript
filteredList = list.filter(item =>
  item.name.toLowerCase().includes(searchText.toLowerCase())
);
```

-----

## 🧠 Advanced React Concepts

### State-Driven Rendering

UI changes reactively when state updates. This is one of React’s core strengths.

### Reconciliation & Virtual DOM

React uses a **Virtual DOM** to detect changes. Only the changed parts are updated in the real DOM, significantly improving performance.

### DOM Manipulation

Manual DOM updates are abstracted away in React. React handles rendering efficiently and declaratively.

### ❓ Optional Chaining

This prevents runtime errors when accessing nested object properties that might be `null` or `undefined`.

```javascript
restaurant?.data?.name
```

-----

## ✅ Summary

In this session, we explored how React handles UI efficiently through hooks, conditional rendering, and state-driven architecture. We shifted from monolithic designs to microservices, built search functionality, and used shimmer loaders for a better user experience. The session emphasized the power of React’s Virtual DOM, simplified API integrations, and showed how modern JavaScript features like optional chaining and `async/await` make code cleaner and more robust.

```
```