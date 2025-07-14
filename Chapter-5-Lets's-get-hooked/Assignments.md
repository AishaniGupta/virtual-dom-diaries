# Questions

* What is the difference between Named export, Default export, and * as export?
* What is the importance of config.js file?
* What are React Hooks?
* Why do we need useState Hook?


1.  **What is the difference between Named export, Default export, and \* as export?**

    * **✅ Default Export**
        * Allows exporting a single value or component from a file.
        * You can import it using any name (no curly braces needed).
        * Only one default export is allowed per file.
        * Example:

        ```javascript
        // In Header.js
        export default Header;

        // In App.js
        import HeaderComponent from './Header';
        ```

    * **✅ Named Export**
        * Allows exporting multiple values or functions from a single file.
        * Must be imported using the exact name (inside curly braces).
        * Can have multiple named exports in a file.
        * Example:

        ```javascript
        // In constants.js
        export const API_URL = "[https://api.example.com](https://api.example.com)";

        // In App.js
        import { API_URL } from './constants';
        ```

    * **✅ \* as Export (Namespace Import)**
        * Imports everything exported from a file under a namespace object.
        * Useful when a file has multiple named exports and you want to group them.
        * Example:

        ```javascript
        // In constants.js
        export const BASE_URL = "url";
        export const TIMEOUT = 3000;

        // In App.js
        import * as config from './constants';

        console.log(config.BASE_URL);
        console.log(config.TIMEOUT);
        ```

2.  **What is the importance of config.js file?**

    While your notes refer to a `constants.js` or `MockData.js` file, the idea of `config.js` is similar.

    * **Importance:**
        * Stores application-level constants, configuration values, or mock data.
        * Keeps configuration separate from business logic and UI code.
        * Makes the code cleaner, reusable, and easy to manage.
        * Helps during deployment or switching between environments (dev/stage/prod).
    * **Example:**

        ```javascript
        // config.js
        export const API_KEY = "your-api-key";
        export const BASE_URL = "[https://api.example.com](https://api.example.com)";
        ```

3.  **What are React Hooks?**

    React Hooks are:
    * Special functions provided by React to use state and other features in functional components (without writing class components).
    * Introduced to bring the power of class components (like state and lifecycle methods) into function components.
    * Written by Meta engineers and part of the `react` module.
    * Common Hooks:
        * `useState()`
        * `useEffect()`

4.  **Why do we need useState Hook?**

    `useState` is needed to:
    * Manage local component state in functional components.
    * Allows storing and updating values like UI inputs, toggles, counters, etc.
    * Causes the component to re-render when the state value changes.
    * **Syntax:**

        ```javascript
        const [count, setCount] = useState(0);
        ```
        * `count` is the current state value.
        * `setCount` is the function to update it.
    * **Example:**

        ```javascript
        function Counter() {
          const [count, setCount] = useState(0);
          return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
        }
        ```

