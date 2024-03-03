# Start learning React from scratch

## Knowledge 
    - We call JSX everything inside wrapped inside the parentheses returned by the component:
    - This looks like HTML, but it's not really HTML. It's a little different.
    - And it's a bit strange to have this code inside a JavaScript file. This does not look like JavaScript at all!
    - "class" in the JavaScript programming language is a reserved word, keyword. That's why React uses "className"
    - JSX is not forgiving. If you forget to close a tag, you will have a clear error message:
    - Another big difference between JSX and HTML is that in JSX we can embed JavaScript.
    - We can print this value in the JSX by adding { variable or statement} anywhere in the JSX.
    - Inside the curly brackets { } we can add any JavaScript statement, but just one statement for every
        curly bracket block. The statement must return something. Ex: we can use a ternary operator
    
    - In React, useState, as well as any other function starting with “use”, is called a Hook.
    - The useState Hook provides those two things:
        + A state variable to retain the data between renders.
        + A state setter function to update the variable and trigger React to render the component again.
    - Anatomy of useState :
        + When you call useState, you are telling React that you want this component to remember something: 
        ```const [index, setIndex] = useState(0);```
            => In this case, you want React to remember index.
        + Note: The convention is to name this pair like const [something, setSomething]. You could name it anything you like, but conventions make things easier to understand across projects.
        + The only argument to useState is the initial value of your state variable. In this example, the index’s initial value is set to 0 with useState(0).
        + Every time your component renders, useState gives you an array containing two values:
            * The state variable (index) with the value you stored.
            * The state setter function (setIndex) which can update the state variable and trigger React to render the component again.
        + Here’s how that happens in action:  const [index, setIndex] = useState(0);
            * Your component renders the first time. Because you passed 0 to useState as the initial value for index, it will return [0, setIndex]. React remembers 0 is the latest state value.
            * You update the state. When a user clicks the button, it calls setIndex(index + 1). index is 0, so it’s setIndex(1). This tells React to remember index is 1 now and triggers another render.
            * Your component’s second render. React still sees useState(0), but because React remembers that you set index to 1, it returns [1, setIndex] instead.
        + And so on!
        Note: setState(5) actually works like setState(n => 5), but n is unused!
        Note: React waits until all code in the event handlers has run before processing your state updates. This is why the re-render only happens after all these setNumber() calls.
        * * * Here, n => n + 1 is called an "updater function". When you pass it to a state setter:
            * React queues this function to be processed after all the other code in the event handler has run.
            * During the next render, React goes through the queue and gives you the final updated state.
        Note: the ... spread syntax is “shallow” — it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once.

    - The "state" is the set of data that is managed by the component.
    - We manage state using the useState utility provided by React. It's technically a hook. 
    - You import useState from React in this way:  import React, { useState } from 'react'
    - useState() accepts the initial value of the state item and returns an array containing the state variable, and
        the function you call to alter the state. Since useState() returns an array we use array destructuring
         to access each individual item. Example: ```const [count, setCount] = useState(0)```
    => Note: We can't just alter the value of a state variable directly like doing count++ or count = count + 1.
        We must call its modifier function setCount() 
        Otherwise the React component will not update its UI to reflect the changes of the data. 
        Calling the modifier is the way we can tell React that the component state has changed.
    - Props can be passed as attributes to the component in the JSX:
        ```<WelcomeMessage myprop={'somevalue'} />```
      and inside the component we receive the props as argument:
        ```function WelcomeMessage({props}) { return { JFX code} } ```
      It's common to use object destructuring to get the props by name:
        ```function WelcomeMessage({ myprop }) { return <p>{myprop}</p> }```
    - Passing props to components is a great way to pass values around in your application.
    - A component either holds data (has state) or receives data through its props.
    - We can also send functions as props, so a child component can call a function in the parent component
    - A special prop is called children . That contains the value of anything that is passed between the opening
        and closing tags of the component, for example: <WelcomeMessage> Prop's value </WelcomeMessage>
      In this case, inside WelcomeMessage we could access the value "Prop's value" by using the children prop:
        function WelcomeMessage({ children }) {  return <p>{children}</p> }
    
    - Another hook useState, there is a hook named useEffect. The useEffect hook allows components to have
        access to the lifecycle events of a component. When you call the hook, you pass it a function. The
        function will be run by React when the component is first rendered, and on every subsequent rerender/update.
        React first updates the DOM, then calls any function passed to useEffect() .
        useEffect() function is run on every subsequent re-render/update of the component, we can tell React to skip it, for performance purposes, by adding a second parameter which is an array that contains a list of state variables to watch for. React will only re-run the side effect if one of the items in this array changes.
        Similarly, you can tell React to only execute the side effect once (at mount time), by passing an empty array
        useEffect() is great for adding logs, accessing 3rd party APIs and much more.
    - When you want to update an object and array, you need to create a new one (or make a copy of an existing one), and then update the state to use that copy. Usually, you will use the ... spread syntax to copy objects and arrays that you want to change


    - When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref: ```import { useRef } from 'react';```
    - Then, you pass the initial value that you want to reference: ``` const ref = useRef(initial_value); ```
        => useRef returns an object like this:  **{ current: initial_value }**
    - You can access the current value of that ref through the ref.current property. This value is intentionally mutable, meaning you can both **read and write** to it. 
    - **Differences between refs and state **
        | refs | state |
        |---------| ---------|
        | useRef(initialValue) returns { current: initialValue } | useState(initialValue) returns the current value of a state variable and a state setter function ( [value, setValue]) |
        | Doesn’t trigger re-render when you change it. | Triggers re-render when you change it. |
        | Mutable—you can modify and update current’s value outside of the rendering process. | ”Immutable”—you must use the state setting function to modify state variables to queue a re-render. |
        | You shouldn’t read (or write) the current value during rendering. | You can read state at any time. However, each render has its own snapshot of state which does not change. |

## Install tailwind css
- In the terminal, run this command to install these dependencies:
 ``` npm i -D tailwindcss postcss autoprefixer ```
- Then run this command: ``` npx tailwindcss init -p ```
- Now open a file called **tailwind.config.js** with VS Code and add to the content field the places where we might find the Tailwind classes we’re going to write:
``` ...
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    ...
```
=> This setting will be used by Tailwind to determine where to look to generate the CSS file.
- Now in the src/index.css file add those 3 lines:
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
Restart the app and Tailwind should be enabled

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
