# Creata a React Component Library

This code was made from this article: [https://hackernoon.com/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b](https://hackernoon.com/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b)

and the original repo: [https://github.com/aakashns/simple-component-library](https://github.com/aakashns/simple-component-library)


## Component
 - put component inside `src/lib`.
 - be sure to export the component in `src/lib/index.js`
**Example:**
```js
import TextInput from "./components/TextInput";

export { TextInput };
```

## Name and Config
package.json  
**Remark:** a unique name is required.  
**Example:**
```json
{
  "name": "aladin-lib",
  "version": "0.1.0",
  ...
}
```


## Build
```
npm run build
```
**Remark:** in Windows you should run the command with `Git Bash`.
## Publish
```
npm login
npm publish
```

## Installation

```
npm install package-name
```
**Example** 
```
npm install aladin-lib
```

## Usage
```js
import { TextInput } from "aladin-lib";

function App() {
  ...

  return (
    <div className="App">
      <TextInput label="Email Address" placeholder="name@example.com" />
      ...
```
