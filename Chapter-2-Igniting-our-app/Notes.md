# React Development Session - Detailed Notes

## Git & GitHub

* Git is a version control system that helps developers track changes in their source code over time.
* GitHub is a cloud-based platform where Git repositories can be stored, managed, and shared collaboratively.
* Create a GitHub repository.
* Initialize Git:

  ```bash
  git init
  ```
* Create and push commits:

  ```bash
  git add .
  git commit -m "initial commit"
  git remote add origin <repository-url>
  git branch -M main
  git push -u origin main
  ```
* Common Git commands:

  * `git branch`: List or create branches.
  * `git commit`: Save changes to local repository.
  * `git push origin main`: Push local commits to the main branch in GitHub.
  * `.gitignore`: File to specify files/folders Git should ignore, such as `node_modules`, `.parcel-cache`, `dist`.

## npm & Project Initialization

* **npm** is the default package manager for Node.js and is used to install and manage dependencies.
* Initialize project:

  ```bash
  npm init
  ```
* `npm init -y`: Skips prompts and generates default `package.json`.
* Install packages:

  ```bash
  npm install
  ```
* `package.json`: Metadata and dependency management file. Contains:

  * Project name, version, description
  * Scripts (e.g., start, test)
  * Dependencies
* `package-lock.json`: Automatically generated file that locks dependency versions to ensure consistency across installs.

### Important Symbols

* `^1.2.3`: Allows updates to minor and patch versions.
* `~1.2.3`: Allows updates to patch versions only.
* No symbol: Locks exact version.

## Dependencies vs DevDependencies

* `dependencies`: Required for app to function in production. E.g., React, ReactDOM.
* `devDependencies`: Needed only during development. E.g., Parcel, Babel.
* Install dev dependency:

  ```bash
  npm install --save-dev <package-name>
  ```

## Installing and Using Parcel

* Parcel is a zero-config module bundler used to compile and optimize code.
* Install as dev dependency:

  ```bash
  npm install -D parcel
  ```
* Start development server:

  ```bash
  npx parcel index.html
  ```
* Build for production:

  ```bash
  npx parcel build index.html
  ```

### Parcel Features:

* **Hot Module Replacement (HMR)**: Automatically updates modules in the browser without refreshing.
* **File watcher**: Built in C++, watches files for changes.
* **Minification**: Reduces file size by removing unnecessary code.
* **Tree shaking**: Removes unused code.
* **Development and production builds**
* **Image optimization**
* **Code splitting**: Divides code into smaller bundles for faster loading.
* **Caching**: Speeds up rebuilds.
* **HTTPS and port management in dev**
* **Zero configuration setup**
* **Support for older browsers**

## Parcel Internals & Performance

* `.parcel-cache`: Stores build cache to speed up subsequent builds.
* Parcel achieves speed via:

  * Multi-threading
  * Smart caching
  * Zero config auto-discovery
* Used in scalable applications for its fast builds.

## Installing React & ReactDOM

* React is the library for building UI components.
* ReactDOM is the package used to render React components to the DOM.
* Install core libraries:

  ```bash
  npm install react
  npm install react-dom
  ```
* Import in code:

  ```js
  import React from "react";
  import ReactDOM from "react-dom";
  ```

## Development vs Production Builds

* `react.development.js`: Unminified, includes extra warnings and errors.
* `react.production.js`: Minified, optimized for performance.
* Parcel auto detects environment and builds accordingly.

## Node Modules

* `node_modules/`: Directory where npm installs packages.
* Should not be pushed to Git due to size and reproducibility issues.

## .gitignore

* Prevents tracking of files/folders that shouldn’t be committed.
* Typical entries:

  ```
  node_modules/
  .parcel-cache/
  dist/
  *.env
  *.log
  ```

## jest & Testing

* Jest is a JavaScript testing framework used to test React components.
* Add script to `package.json`:

  ```json
  "scripts": {
    "test": "jest"
  }
  ```

## dist Folder

* `/dist` contains production-ready code including minified JS, CSS, and assets.
* Output of the bundling process.

## Browserslist

* Used to define the browser support target for your project.
* Ensures modern code is transpiled for older browsers.
* Defined in `package.json` or a `.browserslistrc` file.

## System Design Insights

* Parcel improves development speed and scalability.
* Automated processes and optimizations reduce manual effort.
* Useful for professional-grade applications and large teams.

## Summary

* Set up Git and GitHub repositories
* Initialized npm and managed dependencies
* Differentiated between dependencies and devDependencies
* Installed and configured Parcel bundler
* Understood Parcel’s features and architecture
* Installed and imported React libraries
* Learned about production vs development builds
* Maintained clean repositories with `.gitignore`
* Integrated Jest for testing
* Generated production builds in `dist`
* Ensured browser compatibility with Browserslist
