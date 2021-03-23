# React

## General Questions

**1. What are some advantages of using React?**  

- **Virtual DOM** React uses a Virtual DOM to render the view. As the name suggests, the Virtual DOM is a virtual representation of the real DOM. Each time the data changes in a React app, a new Virtual DOM gets created. Creating a Virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of Virtual DOM, the efficiency of the app improves.  
  
- **Gentle Learning Curve** Anyone with knowledge of JS can easily learn React. It is much simpler to learn than other UI frameworks such as Angular.

- **SEO Friendly** React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.  

- **Reusable Components** React uses a component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development.  

- **Huge Ecosystem of Libraries to Choose From**  React provides you the freedom to choose the tools, libraries, and architecture for developing an application based on your requirements.  

## JSX

**1. What does JSX stand for?** JavaScript XML

**2. What is JSX?** It is a syntax extension to JS that produces React “elements”. 

**3. What does JSX allow us to do?** 

It allows us to write HTML-like code inside JavaScript and place them in the DOM without using functions like `appendChild( )` or `createElement( )`.
As stated in the official docs of React, JSX provides syntactic sugar for `React.createElement(component, props, ...children)` function.

**4. Can React applications be written without JSX?** Yes

**5. Give a code example of using JSX vs. not using JSX.** 

Without using JSX, we would have to create an element by the following process: 
```javascript
const text = React.createElement('p', {}, 'This is a text');
const container = React.createElement('div','{}',text );
ReactDOM.render(container,rootElement);
```
Using JSX, the above code can be simplified:
```javascript
const container = (
 <div>
   <p>This is a text</p>
 </div>
);
ReactDOM.render(container,rootElement);
```

**6. How can you embed expressions in JSX?** 

You can put any valid JavaScript expression inside the curly braces in JSX.

Example:
```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

**7. What are some best practices for JSX?**
- Split JSX over multiple lines for readability.
- It is recommend to wrap it in parentheses to avoid the pitfalls of automatic semicolon insertion.

**8. After compilation, what does JSX evaluate to?**

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

This means that you can use JSX inside of `if` statements and `for` loops, assign it to variables, accept it as arguments, and `return` it from functions:

Example:
```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

**9. How can you specify attributes with JSX?** 

You can either:
1. Use quotes for string values (ex. `const element = <div tabIndex="0"></div>;` OR
2. Use curly braces for expressions (ex. `const element = <img src={user.avatarUrl}></img>;`)

**10. How does JSX differ from HTML when specifying attribute names?**

React DOM uses `camelCase` property naming convention instead of HTML attribute names.

For example, `class` becomes `className` in JSX, and `tabindex` becomes `tabIndex`.

**11. If a tag is empty, can you close it immediately in JSX?**

Yes, you may close it immediately with `/>`, like XML.

Example:
```javascript
const element = <img src={user.avatarUrl} />;
```

**12. Can JSX tags contain children?** Yes

Example: 
```javascript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

**13. How does JSX prevent injection attacks?**

By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

Example:
```javascript
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

## Elements

**1. What are React elements?**

Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen (ex. `const element = <h1>Hello, world</h1>;`) React reads these objects and uses them to construct the DOM and keep it up to date.

**2. What role does React.createElement() play?**

Babel compiles JSX down to `React.createElement()` calls.

These 2 are identical:

JSX
```javascript 
  const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

React Create Element
```javascript 
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement()` creates an object like that is called a **React element**: 
```javascript
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

**3. How do elements differ from components?**

Elements are what components are “made of”.

**4. How many root DOM nodes does a typical application have?**

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

**5. How do you render a React element on the DOM?** 

To render a React element into a root DOM node, pass both to `ReactDOM.render()`.

```javascript
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

In practice, most React apps only call `ReactDOM.render()` once.

**6. What is an immutable object?**

An object whose state cannot be modified after it is created.

**7. Are React object mutable or immutable? Explain.** 

React elements are **immutable**. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

**8. What is the only way to update the UI?** 

By creating a new element, and passing it to `ReactDOM.render()`.

**9. How does React decide what to update in the DOM?**

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

## Virtual DOM

**1. What is the Virtual DOM? How does React use the Virtual DOM to render the UI?** 

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called **reconciliation**.   

![virtual-dom](img/virtual-dom.png)

**2. Why was the Virtual DOM introduced?** 

DOM manipulation is an integral part of any web application, but DOM manipulation is quite slow when compared to other operations in JavaScript.  

The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.  

For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, the entire list gets rendered again instead of just rendering the item that was changed/updated. This is called **inefficient updating**.

To address the problem of inefficient updating, the React team introduced the concept of virtual DOM.

**3. How does the Virtual DOM work?** 

For every DOM object, there is a corresponding virtual DOM object(copy), which has the same properties.

The main difference between the real DOM object and the virtual DOM object is that any changes in the virtual DOM object will not reflect on the screen directly. The virtual DOM object is like a  blueprint of the real DOM object.

Whenever a JSX element gets rendered, every virtual DOM object gets updated.

React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects.
Whenever the virtual DOM gets updated, React compares the two virtual DOMs and gets to know about which virtual DOM objects were updated.
After knowing which objects were updated, React renders only those objects inside the real DOM instead of rendering the complete real DOM. This way, with the use of virtual DOM, react solves the problem of inefficient updating.

**4. Is updating the Virtual DOM object inefficient?**

No, updating the virtual DOM is much faster than updating the real DOM since we are just updating the blueprint of the real DOM.

## Components and Props

**1. What are Components in React?**

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

**2. What are props?**

Elements not only can represent DOM elements, but also user-defined components. When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object **“props”**.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

**3. What is the expected letter-casing of a component?** 

Always start with a capital letter. 

This is because React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component and requires Welcome to be in scope.

**4. How do you determine good candidates to be extracted out as separate components?**

A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be extracted to a separate component.

**5. What are pure functions vs. impure functions?**

**Pure functions** do not attempt to change their inputs, and always return the same result for the same inputs.

```javascript
function sum(a, b){
  return a + b;
}
```

**Impure functions** changes its own input.
```javascript
function withdraw(account, amount) {
  account.total -= amount;
}
```

**6. What is the most important rule React has with regards to props?** 

Props are read-only. All React components must act like pure functions with respect to their props.

**7. What can be done in React as a workaround to having read-only props?**

State can be utilized. State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

State is similar to props, but it is private and fully controlled by the component.

## Functional vs. Class Components

**1. What is a functional component?**

A JavaScript function that accepts props (properties) and returns a React element. These are valid React components.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**2. What is a class component?** 

An ES6 class that extends from React.Component. This is also a valid React component.

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**3. How did the 2 compare before the introduction of hooks?** 

Functional components were stateless components whereas class components were stateful.

**4. What are some ways the 2 compare?** 

| Topic | Functional Component | Class Component |
|:--: | :--| :--| 
| Decalaration | Functional components are nothing but JavaScript functions and therefore can be declared using an **arrow function** or the **function** keyword.| Are declared using the ES6 class. |
| Handling props | Any prop provided as an argument to a functional component, can be directly used inside HTML elements. | `this` keyword is used. |
| Handling state | Functional components use React hooks to handle state. It uses the useState hook to set state of a variable inside the component. Since useState hook returns an array of two items, the first item contains the current state, and the second item is a function used to update the state. | We cannot use React Hooks inside class components. For reading the state, use `this.state.`. For updating the state, we need to first bind the function to `this`. Only then, we will be able to use the `setState` function which is used to update the state. Alternatively, an arrow function can be used to avoid the need to bind. Then the arrow function can be accessed via `this.functionName()` | 

Example of Functional Components: 
```javascript
function card(props){
 return(
   <div className="main-container">
     <h2>Title of the card</h2>
   </div>
 )
}

const card = (props) =>{
 return(
   <div className="main-container">
     <h2>Title of the card</h2>
   </div>
 )
}
```

Example of a Class Component: 
```javascript
class Card extends React.Component{
 constructor(props){
   super(props);
 }

 render(){
   return(
     <div className="main-container">
       <h2>Title of the card</h2>
     </div>
   )
 }
}
```

**5. Give an example of how props are handled by functional components vs class components.**

If given the following prop:

`<StudentInfo name="Mridula" rollNumber="23" />`

In a functional component:
```javascript
function StudentInfo(props){
 return(
   <div className="main">
     <h2>{props.name}</h2>
     <h4>{props.rollNumber}</h4>
   </div>
 )
 ```

In a class component:
```javascript
class StudentInfo extends React.Component{
 constructor(props){
   super(props);
 }

 render(){
   return(
     <div className="main">
       <h2>{this.props.name}</h2>
       <h4>{this.props.rollNumber}</h4> 
     </div>
   )
 }
}
```

**6. Give an example of how state is handled in a functional component vs. a class component.**

State in a Functional Component:
```javascript
function ClassRoom(props){
 let [studentsCount,setStudentsCount] = useState(0);

 const addStudent = () => {
   setStudentsCount(++studentsCount);
 }
 return(
   <div>
     <p>Number of students in class room: {studentsCount}</p>
     <button onClick={addStudent}>Add Student</button>
   </div>
 )
}
```

State in a Class Component:
```javascript
class ClassRoom extends React.Component{
          constructor(props){
            super(props);
            this.state = {studentsCount : 0};
         
            this.addStudent = this.addStudent.bind(this);
          }
         
          addStudent(){
            this.setState((prevState)=>{
              return {studentsCount: prevState.studentsCount++}
            });
          }

          const useArrowFunctionToAvoidBinding = () => {
            return <h1>Hello</h1>;
          }
         
          render(){
            return(
              <div>
              {useArrowFunctionToAvoidBinding()}
                <p>Number of students in class room: {this.state.studentsCount}</p>
                <button onClick={this.addStudent}>Add Student</button>
              </div>
            )
          }
         }
```

## State and Lifecycle Methods

**1. What is mounting?**

Its when a component is rendered to the DOM for the first time.

**2. What is unmounting?**

Its whenever the DOM produced by a component is removed.

**3. What are 3 important rules about `setState()`?**

1) Do not modify state directly.

   - The only place where you can assign `this.state` is the constructor.
   - This is the wrong way to update state. It will not re-render a component: `this.state.comment = 'Hello';`
   - This is the correct way to update state: `this.setState({comment: 'Hello'});`


2) State updates may be asynchronous.

React may batch multiple `setState()` calls into a single update for performance. Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state. Thats why code like below may fail to update the counter.

```javascript
this.setState({
  counter: this.state.counter + this.props.increment,
});
``` 

To fix it, use a second form of `setState()` that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.

You can use either an arrow function or a regular function.

```javascript
// Arrow function:
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

// Regular function:
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

3) State updates are merged.

- This means that when you call `setState()`, React merges the object you provide into the current state.
- For example, your state may contain several independent variables, but then you can update them independently with separate setState() calls.
- The merging is shallow, so, for example, `this.setState({comments})` leaves `this.state.posts` intact, but completely replaces `this.state.comments`.

```javascript
// Original state set in the constructor of a class component:
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

// Setting state of posts:
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });
// Then, setting state of comments:
    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```

**4. In which direction does data flow in a React app?**

React apps have a “top-down” or “unidirectional” data flow. 

Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

**5. Why is state called local or encapsulated?** 

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

**6. How can a component pass its state to child components?**

A component may choose to pass its state down as props to its child components. The child will not know it was a state (ex. `<FormattedDate date={this.state.date} />`).

## Handling Events

**1. What are some differences between handling events in DOM elements vs React elements?**

| React Elements | DOM Elements |
|:-- |:--|
| React events are named using camelCase. | DOM elements are lowercase. |
| With JSX you pass a function as the event handler.  | DOM elements you pass a string. |
| You cannot return false to prevent default behavior in React. You must call preventDefault explicitly. | In HTML, you can. | 
| When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered. | In HTML, you need to addEventListener. |

```javascript
// HTML syntax:
<button onclick="activateLasers()">
  Activate Lasers
</button>

// React syntax:
<button onClick={activateLasers}>
  Activate Lasers
</button>

// HTML onclick:
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>

// React onClick:
function ActionLink() {
  function handleClick(e) { // e is a synthetic event.
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

**2. What is the common pattern followed for event handlers in React in a class component?**

When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    /*
    You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

    This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
    */ 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

**3. What are 2 alternatives to avoid having to bind this?**

1) If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks:

```javascript
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

2) If you aren’t using class fields syntax, you can use an arrow function in the callback. 

The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. This is a performance problem.

```javascript
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

**4. What is the recommended ways of binding?** In the constructor or using the class fields syntax.

**5. What are 2 ways you can pass arguments to event handlers?**

1) Using arrow functions.
2) Using Function.prototype.bind. 

```javascript
// Arrow function:
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

// Function.prototype.bind:
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.

## Resources
1. https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom
2. https://www.interviewbit.com/react-interview-questions/ - Up to Q5