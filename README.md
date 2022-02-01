# React project
22/01/31 ~ 

## 1. Diary 
## 2. To-do list 
## 3. Opple web site clone
----

# What is React? 
* React is a JavaScript library
* To set up 
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



* component: UI 조각 