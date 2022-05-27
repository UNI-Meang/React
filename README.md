# React project
22/01/31 ~ 

## 1. Diary 
## 2. To-do list 
## 3. OTT website 
----

# What is React? 
* React is a JavaScript library
* React is not a framework
* React is used to build user interfaces on the front end.

# To set up 
1.  `npx create-react-app {project-name}`
2. `cd {project-name} && npm start`
3. `/public` - index.html is root , `/src`directory - all React code
4. `index.js`- importing React, ReactDOM, CSS file.
```
  import React from 'react'
  import ReactDOM from 'react-dom'
  import './index.css' 
  ```
5. Create `APP` component 
````
class App extends React.Component {
    render() {
        return (
            <div className = "App">
                <h1> Hello, React! </h1>
            </div>
        )
    }
}
````
6. Render the `App` to the root as before.
``````
ReactDOM.render(<App />, document.getElementById('root'))
``````

# JSX : JavaScript + XML
* <b>`className` is used instead of `class` for adding CSS classes. </b>
* Properties and method in JSX are camelCase 
: `onclick` => `onClick`
* Self-closing tags <i>must</i> end in a slash 
: `<img />`
* <b>Can be embedded inside JSX using curly braces, including variables, functions, and properties. </b>
  ``` 
    const name = 'Uni'
    const heading = <h1> Hello, {name}</h1>
    ```

# Components
* <i>Component: piece of UI</i>

1. A class component must include `render()`, and the `return` can only return one parent element.
    ```
    const SimpleComponent = () => {
    return <div> Hi! </div>
    }
    ```

    # Props
* Can access all props through `this.props` 
* Always use `keys` when making lists in React, as they help identify each list item.
* Props are an effective way to pass existing data to a React component, but the component cannot change the props - they're read-only.