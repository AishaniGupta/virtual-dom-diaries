# Questions

* What is Microservice?
* What is Monolith architecture?
* What is the difference between `Monolith and Microservice?
* Why do we need a useEffect Hook?
* What is Optional Chaining?
* What is Shimmer UI?
* What is the difference between JS expression and JS statement?
* What is Conditional Rendering? explain with a code example.
* What is CORS?
* What is async and await?
* What is the use of const json = await data.json(); in getRestaurants()?


Here are detailed answers to your questions based on the React session notes above, along with examples wherever applicable:

-----

## 1\. What is Microservice?

A **Microservice** is an architectural style where an application is broken down into small, independent services. Each service is responsible for a single business capability (e.g., authentication, search, payment) and can be developed, deployed, and scaled independently.

**🧩 Example:**

  * **Auth Service** handles login/signup.
  * **Product Service** handles product details.
  * **UI Service** is a frontend app that consumes APIs.

This modular approach improves maintainability, scalability, and allows teams to work independently.

-----

## 2\. What is Monolith architecture?

A **Monolith Architecture** is a traditional software model where all components of the application — frontend, backend, business logic, and database — are built and deployed as a single unit.

**⚙️ Characteristics:**

  * Single codebase.
  * Changes to one feature may require redeployment of the whole app.
  * Hard to scale individual parts.

-----

## 3\. What is the difference between Monolith and Microservice?

| Feature             | Monolith                      | Microservice                             |
| :------------------ | :---------------------------- | :--------------------------------------- |
| **Structure** | Single large codebase         | Multiple independent services            |
| **Scalability** | Harder to scale specific features | Each service can be scaled independently |
| **Deployment** | Deploy entire app             | Deploy services individually             |
| **Maintenance** | Complex and tightly coupled   | Easier, modular, and loosely coupled     |
| **Technology Flexibility** | Single tech stack             | Different services can use different stacks |

-----

## 4\. Why do we need a `useEffect` Hook?

The `useEffect()` Hook is used in React to handle **side effects** in functional components. Side effects include operations like:

  * Fetching data from an API
  * Setting up subscriptions
  * Manipulating the DOM
  * Starting/stopping timers

**✅ Example:**

```javascript
useEffect(() => {
  fetchData();
}, []);
```

The empty array (`[]`) means the effect runs once (like `componentDidMount` in class components). It helps keep side-effect logic separate from rendering logic.

-----

## 5\. What is Optional Chaining?

**Optional Chaining (`?.`)** allows you to safely access deeply nested object properties without worrying about `undefined` or `null` values causing errors.

**✅ Example:**

```javascript
const restaurantName = restaurant?.data?.name;
```

If `restaurant`, `data`, or `name` doesn't exist, it will not throw an error; it will simply return `undefined`.

-----

## 6\. What is Shimmer UI?

**Shimmer UI** is a loading animation technique where a skeleton version of the content is shown while the real content is being loaded.

**✅ Purpose:**

  * Improve user experience by showing structure instead of a blank screen.
  * Keeps the UI visually responsive.

**✅ Example:**

```javascript
const Shimmer = () => (
  <div className="shimmer-card">
    <div className="shimmer-title"></div>
    <div className="shimmer-description"></div>
  </div>
);
```

-----

## 7\. What is the difference between JS expression and JS statement?

| Term        | Description                                     | Example                      |
| :---------- | :---------------------------------------------- | :--------------------------- |
| **Expression** | Produces a value                                | `5 + 3`, `"React"`, `user.name` |
| **Statement** | Performs an action, doesn't return a value      | `if (x > 5) { console.log(x); }` |

Expressions are used inside JSX (`{}`). Statements cannot be directly used in JSX.

**❌ Invalid:**

```javascript
{ if (isLoggedIn) console.log("Hello") }
```

**✅ Valid:**

```javascript
{ isLoggedIn && <p>Hello</p> }
```

-----

## 8\. What is Conditional Rendering? Explain with a code example.

**Conditional Rendering** in React means rendering different UI based on certain conditions like user login status, data availability, etc.

**✅ Example:**

```javascript
{isLoggedIn ? <Logout /> : <Login />}
```

OR using **Logical AND (`&&`)**:

```javascript
{isAdmin && <AdminDashboard />}
```

React re-renders the appropriate component based on the value of the condition.

-----

## 9\. What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a browser security policy that restricts web applications from making requests to a different domain than the one that served the web page.

If your frontend is running on `localhost:3000` and your API is on `api.example.com`, CORS might block the request unless the server explicitly allows it via response headers.

**✅ Fixes:**

  * Add CORS headers on the backend.
  * Use a CORS proxy or browser extension during development.

-----

## 10\. What is `async` and `await`?

`async` and `await` are modern JavaScript keywords used to handle asynchronous operations in a cleaner and more readable way than `.then()` chains.

**✅ Example:**

```javascript
const getData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
};
```

  * `async` makes the function return a promise.
  * `await` pauses execution until the promise resolves.

-----

## 11\. What is the use of `const json = await data.json();` in `getRestaurants()`?

In a typical React API call using `fetch()`, we first get a `Response` object. To convert this raw response into a usable JavaScript object (specifically, a JSON object), we call the `.json()` method on it.

**✅ Code:**

```javascript
const data = await fetch(API_URL);
const json = await data.json();
```

  * `data` is the raw `Response` object returned by `fetch()` (it contains metadata like headers, status, etc., but not the actual body content yet).
  * `data.json()` is an **asynchronous operation** that reads the response body from the `Response` object and parses it as JSON.
  * The `json` object then contains the actual restaurant data (or whatever data the API returns) that we can use in the application.
