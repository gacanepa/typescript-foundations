# TypeScript Foundations

### Prerequisites

- Node.js version 20.16.0 or higher
- npm version 10.8.1 or higher

To view the current version of Node.js and npm installed on your system, run the following commands in your terminal:

```bash
node -v
npm -v
```

> I recommend installing Node.js and npm using [nvm](https://nodejs.org/en/download/package-manager).

### Notes on TypeScript

TypeScript is:

- a superset of JavaScript that adds static types to the language. You can think of TypeScript as JavaScript with type annotations.
- compiled to JavaScript.
- a statically, strongly typed language.

TypeScript is not:

- a new language. It is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. Some external JavaScript libraries may not include TypeScript type definitions, so you will need to add the declaration files (with the `.d.ts` extension) either manually or by loading types from the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) repository. For example, `@types/node` provides type definitions for Node.js - which makes it possible to access Node.js specific APIs in TypeScript (`process`, `fs`, `http`, to name a few examples).
- a replacement for JavaScript. TypeScript code is transpiled to JavaScript code, which means that TypeScript code runs in any JavaScript environment (e.g., browsers, Node.js).

### Setting Up a TypeScript Project

To set up a TypeScript project, you need to:

1. Install TypeScript as a development dependency in your project:

```bash
npm install --save-dev typescript
```

2. Initialize a TypeScript project by running the following command in your project's root directory:

```bash
npx tsc --init
```

This command generates a `tsconfig.json` file in your project's root directory. The `tsconfig.json` file contains the compiler options needed so "that TypeScript understands how to interpret your code, how to make types available for dependencies, and if you need to turn certain features on or off" (Baumgartner, 2023).

3. Create a `src` directory in your project's root directory to store your TypeScript files.

4. Set the `rootDir` and `outDir` options in the `tsconfig.json` file to specify the source directory and output directory for your TypeScript files. The latter is where the compiled JavaScript files will be stored, and will get created when you run the TypeScript compiler.

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

> The `rootDir` and `outDir` options specify the root and output directories of input and output (compiled) files, respectively. This approach makes it possible to separate source files (the ones you author) from built resources. It is important to note that these options are not required, but they are recommended for better project organization.

5. Create an index.ts file in the `src` directory to write your TypeScript code and use it inside of an HTML file.

6. Use Parcel to bundle your TypeScript code and run a local development server. To install Parcel, run the following command in your project's root directory:

```bash
npm install --save-dev parcel
```

7. Add a `start` script to your `package.json` file to run the Parcel development server:

```json
{
  "scripts": {
    "startdev": "parcel src/index.html"
  }
}
```

8. Run the `startdev` script to start the Parcel development server:

```bash
npm run startdev
```

9. Open your browser and navigate to `http://localhost:1234` to view your TypeScript code running in the browser. You can stop it at any time by pressing `Ctrl + C` in your terminal.

10. Install @faker-js/faker to generate fake data for your TypeScript project:

```bash
npm install @faker-js/faker
```

11. Import the `faker` module in your TypeScript file to generate fake data:

```typescript
import faker from 'faker';
```

12. Use the `faker` module to generate fake data in your TypeScript file.

13. Run the `startdev` script to start the Parcel development server and view the fake data generated by the `faker` module in the browser.
14. To build your TypeScript project for production, run the following command in your project's root directory:

```bash
npx tsc
```

This command compiles your TypeScript code to JavaScript and stores the compiled files in the `dist` directory.

15. To run the production build of your TypeScript project, use the following command:

```bash
npx serve dist
```

This command starts a local server that serves the compiled JavaScript files in the `dist` directory.

16. Open your browser and navigate to http://localhost:1234 to view your TypeScript code running in the browser.

17. To deploy your TypeScript project to a hosting service, you can use a service like Netlify, Vercel, Render, or GitHub Pages. These services allow you to deploy static sites easily and for free.

### Works Cited

- Baumgartner, S. (2023). TypeScript cookbook. O’Reilly Media, Inc. 
