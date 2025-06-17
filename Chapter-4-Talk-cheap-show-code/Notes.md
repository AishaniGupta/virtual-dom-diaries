```markdown
# Chapter 03: Building UI with React – Learning Notes

## Layout Design and JSX Coding

### Mock Design & Section Breakdown
- Begin by mocking the web layout in parts (e.g., Header, Body, Footer).
- Design first helps map out structure and responsibilities for each component.

### CSS Implementation
- Basic styling setup using `style.css`.
- Structure your HTML elements with semantic classes and use Flexbox or Grid.

## Creating Components with React

### Header Component
- Start simple using a `<Header/>` component.
- Use `React.createElement()` or JSX to create elements.
- JSX looks like HTML but compiles to `React.createElement` under the hood.

### CSS for JSX
- You can still use external CSS.
- Inline styles in JSX:
  ```js
  const styleObj = { backgroundColor: "lightblue" };
  <div style={styleObj}>Hello</div>
  ```

### JSX Key Points
- JSX is not HTML.
- Every JSX element must be wrapped inside one parent.
- `class` becomes `className`.
- `for` becomes `htmlFor`.

### Image Handling in JSX
- Import static images:
  ```js
  import logo from "./logo.png";
  <img src={logo} />
  ```
- Or use dynamic images:
  ```js
  const imgUrl = "[https://cdn.example.com/image.jpg](https://cdn.example.com/image.jpg)";
  <img src={imgUrl} />
  ```

### Props and Dynamic Data

#### Using Props
- Props allow data to flow from parent to child component.
- Example:
  ```jsx
  const RestaurantCard = ({ name, cuisine }) => (
    <div>
      <h2>{name}</h2>
      <p>{cuisine}</p>
    </div>
  );
  ```

#### Multiple Cards with Props
- Pass props dynamically for each item:
  ```jsx
  restaurantList.map((restaurant) => (
    <RestaurantCard key={restaurant.id} {...restaurant.info} />
  ));
  ```

#### Destructuring Props
- Instead of `props.name`, use `{ name }` directly in function arguments.

### Config-Driven UI
- Build UI dynamically using a config/data layer.
- Benefits:
  - Easier to scale.
  - Decouples data from layout.
- Example:
  ```js
  const restaurantList = [ {...}, {...} ];
  ```

### Dealing with API Issues
- Handle broken/missing data using optional chaining:
  ```js
  restaurant?.info?.name
  ```

### Utility Methods

#### Array Join for Display
- Convert arrays into readable strings:
  ```js
  cuisines.join(", ")
  ```

#### Using `map()`
- Core utility in JSX rendering:
  ```js
  data.map(item => <Component key={item.id} {...item} />);
  ```

### Unique Keys in React
- Add `key` prop when rendering lists to help React identify elements uniquely.
- Never use indexes if possible.

## Summary

### What You Built
- A fully functional UI layout with:
  - Header
  - List of restaurant cards (dynamically generated)
  - Each card uses props and destructuring
  - Optional chaining to handle missing data

### Concepts You Practiced
- JSX syntax and rules
- Inline vs external CSS
- Passing and destructuring props
- Mapping lists with `key`
- Using mock data for building config-driven UIs
- Optional chaining and array methods
```