# React

## General Questions

#### What are some advantages of using React? 

- **Virtual DOM** React uses a Virtual DOM to render the view. As the name suggests, the Virtual DOM is a virtual representation of the real DOM. Each time the data changes in a React app, a new Virtual DOM gets created. Creating a Virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of Virtual DOM, the efficiency of the app improves.  
  
- **Gentle Learning Curve** Anyone with knowledge of JS can easily learn React. It is much simpler to learn than other UI frameworks such as Angular.

- **SEO Friendly** React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.  

- **Reusable Components** React uses a component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development.  

- **Huge Ecosystem of Libraries to Choose From**  React provides you the freedom to choose the tools, libraries, and architecture for developing an application based on your requirements.  

#### Describe the thought process when building an application with React.

1. **Break the UI into a component hierarchy.** The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. To decide what should be its own component: use the same techniques for deciding if you should create a new function or object. One such technique is the **single responsibility principle**, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.Separate your UI into components, where each component matches one piece of your data model.
2. **Build a Static Version in React.** Create a version with only props and no state. In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build. At the end of this step, you’ll have a library of reusable components that render your data model. The components will only have `render()` methods since this is a static version of your app.
3. **Identify The Minimal (but complete) Representation Of UI State**
4. **Identify Where Your State Should Live**
5. **Add Inverse Data Flow**

## JSX

#### What does JSX stand for?

JavaScript XML

#### What is JSX?

It is a syntax extension to JS that produces React “elements”. 

#### What does JSX allow us to do?

It allows us to write HTML-like code inside JavaScript and place them in the DOM without using functions like `appendChild( )` or `createElement( )`.
As stated in the official docs of React, JSX provides syntactic sugar for `React.createElement(component, props, ...children)` function.

#### Can React applications be written without JSX?

Yes

#### Give a code example of using JSX vs. not using JSX. 

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

#### How can you embed expressions in JSX?

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

#### What are some best practices for JSX?

- Split JSX over multiple lines for readability.
- It is recommend to wrap it in parentheses to avoid the pitfalls of automatic semicolon insertion.

#### After compilation, what does JSX evaluate to?

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

#### How can you specify attributes with JSX?

You can either:
1. Use quotes for string values (ex. `const element = <div tabIndex="0"></div>;` OR
2. Use curly braces for expressions (ex. `const element = <img src={user.avatarUrl}></img>;`)

#### How does JSX differ from HTML when specifying attribute names?

React DOM uses `camelCase` property naming convention instead of HTML attribute names.

For example, `class` becomes `className` in JSX, and `tabindex` becomes `tabIndex`.

#### If a tag is empty, can you close it immediately in JSX?

Yes, you may close it immediately with `/>`, like XML.

Example:
```javascript
const element = <img src={user.avatarUrl} />;
```

#### Can JSX tags contain children?

Yes

Example: 
```javascript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

#### How does JSX prevent injection attacks?

By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

Example:
```javascript
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

## Elements

#### What are React elements?

Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen (ex. `const element = <h1>Hello, world</h1>;`) React reads these objects and uses them to construct the DOM and keep it up to date.

#### What role does React.createElement() play?

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

#### How do elements differ from components?

Elements are what components are “made of”.

#### How many root DOM nodes does a typical application have?

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

#### How do you render a React element on the DOM? 

To render a React element into a root DOM node, pass both to `ReactDOM.render()`.

```javascript
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

In practice, most React apps only call `ReactDOM.render()` once.

#### What is an immutable object?

An object whose state cannot be modified after it is created.

#### Are React object mutable or immutable? Explain.

React elements are **immutable**. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

#### What is the only way to update the UI?

By creating a new element, and passing it to `ReactDOM.render()`.

#### How does React decide what to update in the DOM?

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

## Virtual DOM

#### What is the Virtual DOM? How does React use the Virtual DOM to render the UI?

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called **reconciliation**.   

![virtual-dom](img/virtual-dom.png)

#### Why was the Virtual DOM introduced?

DOM manipulation is an integral part of any web application, but DOM manipulation is quite slow when compared to other operations in JavaScript.  

The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.  

For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, the entire list gets rendered again instead of just rendering the item that was changed/updated. This is called **inefficient updating**.

To address the problem of inefficient updating, the React team introduced the concept of virtual DOM.

#### How does the Virtual DOM work?

For every DOM object, there is a corresponding virtual DOM object(copy), which has the same properties.

The main difference between the real DOM object and the virtual DOM object is that any changes in the virtual DOM object will not reflect on the screen directly. The virtual DOM object is like a  blueprint of the real DOM object.

Whenever a JSX element gets rendered, every virtual DOM object gets updated.

React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects.
Whenever the virtual DOM gets updated, React compares the two virtual DOMs and gets to know about which virtual DOM objects were updated.
After knowing which objects were updated, React renders only those objects inside the real DOM instead of rendering the complete real DOM. This way, with the use of virtual DOM, react solves the problem of inefficient updating.

#### Is updating the Virtual DOM object inefficient?

No, updating the virtual DOM is much faster than updating the real DOM since we are just updating the blueprint of the real DOM.

## Components and Props

#### What are Components in React?

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

#### What are props?

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

#### What is the expected letter-casing of a component?

Always start with a capital letter. 

This is because React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component and requires Welcome to be in scope.

#### How do you determine good candidates to be extracted out as separate components?

A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be extracted to a separate component.

#### What are pure functions vs. impure functions?

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

#### What is the most important rule React has with regards to props?

Props are read-only. All React components must act like pure functions with respect to their props.

#### What can be done in React as a workaround to having read-only props?

State can be utilized. State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

State is similar to props, but it is private and fully controlled by the component.

## Functional vs. Class Components

#### What is a functional component?

A JavaScript function that accepts props (properties) and returns a React element. These are valid React components.

Functional components in React can look 2 ways:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
}
```

#### What is a class component?

An ES6 class that extends from React.Component. This is also a valid React component.

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

#### How did the 2 compare before the introduction of hooks? 

Functional components were stateless components whereas class components were stateful.

#### What are some ways the 2 compare?

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

#### Give an example of how props are handled by functional components vs class components.

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

#### Give an example of how state is handled in a functional component vs. a class component.

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

#### What is mounting?

Its when a component is rendered to the DOM for the first time.

#### What is unmounting?

Its whenever the DOM produced by a component is removed.

#### What are 3 important rules about `setState()`?

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

#### In which direction does data flow in a React app?

React apps have a “top-down” or “unidirectional” data flow. 

Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

#### Why is state called local or encapsulated?

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

#### How can a component pass its state to child components?

A component may choose to pass its state down as props to its child components. The child will not know it was a state (ex. `<FormattedDate date={this.state.date} />`).

#### What is the best way to set the state back to the initial state?

```javascript
import React, { Component } from 'react'
class MyComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputVal: props.inputValue
    }
    // preserve the initial state in a new object
    this.baseState = this.state 
  }
  resetForm = () => {
    // this resets by setting it back to the baseState
    this.setState(this.baseState)
  }
  submitForm = () => {
    // submit the form logic
  }
  updateInput = val => this.setState({ inputVal: val })
  render() {
    return (
      <form>
        <input
          onChange={this.updateInput}
          type="text
          value={this.state.inputVal} />
        <button
          onClick={this.resetForm}
          type="button">Cancel</button>
        <button
          onClick={this.submitForm}
          type="submit">Submit</button>
      </form>
    )
  }
}
```

## Handling Events

#### What are some differences between handling events in DOM elements vs React elements?

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

#### What is the common pattern followed for event handlers in React in a class component?

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

#### What are 2 alternatives to avoid having to bind this?

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

#### What is the recommended ways of binding?

In the constructor or using the class fields syntax.

#### What are 2 ways you can pass arguments to event handlers?

1) Using arrow functions.
2) Using Function.prototype.bind. 

```javascript
// Arrow function:
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

// Function.prototype.bind:
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.

## Conditional Rendering

#### How can you achieve conditional rendering in React?

It is the same as JS. Here are 7 possibilities:

1. Using an `if-else` statement.
2. You can use variables to store elements (**element variables**). This can help you conditionally render a part of the component while the rest of the output doesn’t change.
3. Using a `switch` statement.
4. Using **conditional/ternary operators**: `condition ? true : false`
5. Using **short circuit evaluation**: `{condition && <tag>content</tag>}`
6. Using enhanced JSX libraries (ex. the babel plugin JSX Control Statements) Note that this way is not recommended.
7. Using immediately invoked function expressions (IIFEs)

```javascript
(function () {
  // statements
})();
```

Remember that whenever conditions become too complex, it might be a good time to extract a component.

#### How do you prevent a component from rendering in React?

In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return `null` instead of its render output.

```javascript
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}
```

## Lists & Keys

#### How can you render multiple components from an array? 

You can loop through an array using the JS map function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

// rendering:
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

Usually you would render lists inside a component. A **key** is required in lists. A “key” is a special string attribute you need to include when creating lists of elements.

A good rule of thumb is that elements inside the `map()` call need keys.

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

#### What is the purpose of keys?

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. 

#### What is the best way to pick a key?

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys. 

```javascript
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

#### Why is using item index's not recommended as keys?

Its not recommended to use indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. 

It may break your application and display wrong data!

A key is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.

#### What does React use as default as a key?

If you choose not to assign an explicit key to list items then React will default to using indexes as keys.

#### Do keys need to be unique globally?

No.Keys used within arrays should be unique among their siblings. However they don’t need to be globally unique. We can use the same keys when we produce two different arrays.

#### How do you pass keys to your components? 

Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name. In the example below,  the Post component can read `props.id`, but not `props.key`.

```javascript
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```
## Forms

#### What is a controlled component?

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState()`.

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

With a controlled component, the input’s value is always driven by the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers.

```javascript
/*
Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth. Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.
*/
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

#### How does the textarea tag differ in HTML vs React?

In HTML, a `<textarea>` element defines its text by its children:

```html
<textarea>
  Hello there, this is some text in a text area
</textarea>
```

In React, a `<textarea>` uses a value attribute instead. This way, a form using a `<textarea>` can be written very similarly to a form that uses a single-line input:

```javascript
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

#### How does the select tag differ in HTML vs React?

In HTML, `<select>` creates a drop-down list. For example, this HTML creates a drop-down list of flavors:

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```
Note that the Coconut option is initially selected, because of the `selected` attribute. React, instead of using this `selected` attribute, uses a `value` attribute on the root `select` tag. This is more convenient in a controlled component because you only need to update it in one place. For example:

```javascript
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

#### How can you select multiple options in a React select?

You can pass an array into the `value` attribute, allowing you to select multiple options in a `select` tag.

```javascript
<select multiple={true} value={['B', 'C']}>
```

#### Why is the file tag considered to be an uncontrolled component?

Because its value is **read-only**, it is an uncontrolled component in React. 

In HTML, an `<input type="file">` lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the File API.

#### What is a popular library for a fully-fledged solution of handling forms in React?

Formik - it is a complete solution including validation, keeping track of the visited fields, and handling form submission, etc.

#### What is an alternative to controlled components?

Uncontrolled components (though controlled are recommended).

It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out uncontrolled components, an alternative technique for implementing input forms.

#### What would prevent a user from changing an input on a controlled component?

Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. 

#### What is one way of handling multiple inputs?

When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.

```javascript
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

## Lifting State Up

#### What is the recommended practice when several components need to reflect the same changing data?

Lifting the shared state up to their closest common ancestor. 

There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.

#### What is a downside of lifting state up?

Lifting state involves writing more “boilerplate” code than two-way binding approaches.

#### What is a benefit of lifting state up?

It takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.

## Composition vs Inheritance

#### What is the suggestion for reusing non-UI functionality between components?

Extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.

#### What is composition used for in lieu of?

It is used instead of inheritance in React.

#### What is containment?

Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.

We recommend that such components use the special children prop to pass children elements directly into their output. This lets other components pass arbitrary children to them by nesting the JSX.

```javascript
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

#### What is specialization?

Sometimes we think about components as being “special cases” of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.

In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props:

```javascript
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```
## Hooks

### General

#### In what React version was hooks introduced?

16.8

#### What are hooks?

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes. They let you use state and other React features without writing a class.

React provides a few built-in Hooks like `useState`. You can also create your own Hooks to reuse stateful behavior between different components.

#### Will class components be deprecated?

No. Class components will still be supported. Hooks work side-by-side with existing code so you can adopt them gradually.

#### What are some recommendations when it comes to adoption of hooks in a React app?

- Gradual adoption strategy
  - It is recommended to avoid any “big rewrites”, especially for existing, complex class components. 
  - It’s best to practice using Hooks in new and non-critical components first.

#### What was the motivation behind hooks?

1. It’s hard to reuse stateful logic between components. Hooks allow you to reuse stateful logic without changing your component hierarchy. 
2. Complex components become hard to understand. We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often contains a mix of unrelated logic. In many cases it’s not possible to break these components into smaller ones because the stateful logic is all over the place. It’s also difficult to test them. This is one of the reasons many people prefer to combine React with a separate state management library. However, that often introduces too much abstraction, requires you to jump between different files, and makes reusing components more difficult.Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods. 
3. Classes confuse both people and machines. In addition to making code reuse and code organization more difficult, we’ve found that classes can be a large barrier to learning React. You have to understand how this works in JavaScript, which is very different from how it works in most languages. You have to remember to bind the event handlers. Without unstable syntax proposals, the code is very verbose. Hooks let you use more of React’s features without classes.

#### What does it mean that React Hooks are "backwards compatible"?

Hooks don’t contain any breaking changes.

#### What are the rules of hooks?

Hooks are JavaScript functions, but they impose two additional rules:

- Only call Hooks **at the top level**. Don’t call Hooks inside loops, conditions, or nested functions.
- Only call Hooks **from React function components**. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks.)

React provides a linter plugin (eslint-plugin-react-hooks) to enforce these rules automatically.This plugin is included by default in Create React App. [`npm install eslint-plugin-react-hooks --save-dev`]

#### How can you pass information between hooks?

Since Hooks are functions, we can pass information between them.

Example:
```javascript
const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <Circle color={isRecipientOnline ? 'green' : 'red'} />
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
}
```

#### Do Hooks cover all use cases for classes?

Our goal is for Hooks to cover all use cases for classes as soon as possible. There are no Hook equivalents to the uncommon `getSnapshotBeforeUpdate`, `getDerivedStateFromError` and `componentDidCatch` lifecycles yet, but we plan to add them soon.

It is an early time for Hooks, and some third-party libraries might not be compatible with Hooks at the moment.


#### Do Hooks work with static typing?

Hooks were designed with static typing in mind. Because they’re functions, they are easier to type correctly than patterns like higher-order components. The latest Flow and TypeScript React definitions include support for React Hooks.

Importantly, custom Hooks give you the power to constrain React API if you’d like to type them more strictly in some way. React gives you the primitives, but you can combine them in different ways than what we provide out of the box.

#### Are testing components with hooks different from testing regular components?

From React’s point of view, a component using Hooks is just a regular component. If your testing solution doesn’t rely on React internals, testing components with Hooks shouldn’t be different from how you normally test components.

Example:
```javascript
// class
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

```javascript
// test
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Counter from './Counter';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  // Test first render and effect
  act(() => {
    ReactDOM.render(<Counter />, container);
  });
  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');

  // Test second render and effect
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(label.textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
});
```

#### What exactly do the lint rules (eslint plugin) enforce?

- Calls to Hooks are either inside a `PascalCase` function (assumed to be a component) or another `useSomething` function (assumed to be a custom Hook).
- Hooks are called in the same order on every render.
- There are a few more heuristics, and they might change over time as we fine-tune the rule to balance finding bugs with avoiding false positives.


#### How does React associate Hook calls with components under the hood?

React keeps track of the currently rendering component. Thanks to the Rules of Hooks, we know that Hooks are only called from React components (or custom Hooks — which are also only called from React components).

There is an internal list of “memory cells” associated with each component. They’re just JavaScript objects where we can put some data. When you call a Hook like `useState()`, it reads the current cell (or initializes it during the first render), and then moves the pointer to the next one. This is how multiple `useState()` calls each get independent local state.

#### How do you implement shouldComponentUpdate with hooks?

You can wrap a function component with React.memo to shallowly compare its props:

```javascript
const Button = React.memo((props) => {
  // your component
});
```

It’s not a Hook because it doesn’t compose like Hooks do. `React.memo` is equivalent to `PureComponent`, but it only compares props. (You can also add a second argument to specify a custom comparison function that takes the old and new props. If it returns true, the update is skipped.)

`React.memo` doesn’t compare state because there is no single state object to compare. But you can make children pure too, or even optimize individual children with `useMemo`.

#### How do you memoize calculations?

The `useMemo` Hook lets you cache calculations between multiple renders by “remembering” the previous computation:

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

This code calls `computeExpensiveValue(a, b)`. But if the dependencies `[a, b]` haven’t changed since the last value, useMemo skips calling it a second time and simply reuses the last value it returned.

Remember that the function passed to `useMemo` runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in `useEffect`, not `useMemo`.

#### How do you implement getDerivedStateFromProps?

While you probably don’t need it, in rare cases that you do (such as implementing a `<Transition>` component), you can update the state right during rendering. React will re-run the component with updated state immediately after exiting the first render so it wouldn’t be expensive.

```javascript
function ScrollView({row}) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevRow, setPrevRow] = useState(null);

  if (row !== prevRow) {
    // Row changed since last render. Update isScrollingDown.
    setIsScrollingDown(prevRow !== null && row > prevRow);
    setPrevRow(row);
  }

  return `Scrolling down: ${isScrollingDown}`;
}
```

#### How can you get the previous props or state?

Currently, you can do it manually with a ref:

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  return <h1>Now: {count}, before: {prevCount}</h1>;
}
```

This might be a bit convoluted but you can extract it into a custom Hook:

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return <h1>Now: {count}, before: {prevCount}</h1>;
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Note how this would work for props, state, or any other calculated value.

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  const calculation = count + 100;
  const prevCalculation = usePrevious(calculation);
  // ...
```

#### Can you run an effect only on updates?

This is a rare use case. If you need it, you can use a mutable ref to manually store a boolean value corresponding to whether you are on the first or a subsequent render, then check that flag in your effect. (If you find yourself doing this often, you could create a custom Hook for it.)

#### Should I use one or many state variables?

If you’re coming from classes, you might be tempted to always call `useState()` once and put all state into a single object. You can do it if you’d like. Here is an example of a component that follows the mouse movement. We keep its position and size in the local state:

```javascript
function Box() {
  const [state, setState] = useState({ left: 0, top: 0, width: 100, height: 100 });
  // ...
}
```

Now let’s say we want to write some logic that changes left and top when the user moves their mouse. Note how we have to merge these fields into the previous state object manually:

```javascript
// ...
  useEffect(() => {
    function handleWindowMouseMove(e) {
      // Spreading "...state" ensures we don't "lose" width and height
      setState(state => ({ ...state, left: e.pageX, top: e.pageY }));
    }
    // Note: this implementation is a bit simplified
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, []);
  // ...
```

This is because when we update a `state` variable, we replace its value. This is different from `this.setState` in a class, which merges the updated fields into the object.

If you miss automatic merging, you could write a custom `useLegacyState` Hook that merges object state updates. However, we **recommend to split state into multiple state variables based on which values tend to change together**.

For example, we could split our component state into position and size objects, and always replace the position with no need for merging:

```javascript
 function Box() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [size, setSize] = useState({ width: 100, height: 100 });

  useEffect(() => {
    function handleWindowMouseMove(e) {
      setPosition({ left: e.pageX, top: e.pageY });
    }
    // ...
```

Separating independent state variables also has another benefit. It makes it easy to later extract some related logic into a custom Hook, for example:

```javascript
 function Box() {
  const position = useWindowPosition();
  const [size, setSize] = useState({ width: 100, height: 100 });
  // ...
}

function useWindowPosition() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  useEffect(() => {
    // ...
  }, []);
  return position;
}
```

#### Is there something like instance variables?

Yes! The `useRef()` Hook isn’t just for DOM refs. The “ref” object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class.

You can write to it from inside `useEffect`.

Conceptually, you can think of refs as similar to instance variables in a class. Unless you’re doing lazy initialization, avoid setting refs during rendering — this can lead to surprising behavior. Instead, typically you want to modify refs in event handlers and effects.

```javascript
function Timer() {
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      // ...
    });
    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  // ...
}
```

#### How do lifecycle methods correspond to Hooks?

- `constructor`: Function components don’t need a constructor. You can initialize the state in the `useState` call. If computing the initial state is expensive, you can pass a function to `useState`.
- `getDerivedStateFromProps`: Schedule an update while rendering instead.
- `shouldComponentUpdate`: `React.memo`.
- `render`: This is the function component body itself.
- `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`: The `useEffect` Hook can express all combinations of these (including less common cases).
- `getSnapshotBeforeUpdate`, `componentDidCatch` and `getDerivedStateFromError`: There are no Hook equivalents for these methods yet, but they will be added soon.

#### How to create expensive objects lazily?

`useMemo` lets you memoize an expensive calculation if the dependencies are the same. However, it only serves as a hint, and doesn’t guarantee the computation won’t re-run. But sometimes you need to be sure an object is only created once.

The first common use case is when creating the initial state is expensive:

```javascript
function Table(props) {
  // ⚠️ createRows() is called on every render
  const [rows, setRows] = useState(createRows(props.count));
  // ...
}
```

To avoid re-creating the ignored initial state, we can pass a function to `useState`. React will only call this function during the first render:

```javascript
function Table(props) {
  // ✅ createRows() is only called once
  const [rows, setRows] = useState(() => createRows(props.count));
  // ...
}
```

You might also occasionally want to avoid re-creating the `useRef()` initial value. For example, maybe you want to ensure some imperative class instance only gets created once:

```javascript
function Image(props) {
  // ⚠️ IntersectionObserver is created on every render
  const ref = useRef(new IntersectionObserver(onIntersect));
  // ...
}
```
`useRef` does not accept a special function overload like useState. Instead, you can write your own function that creates and sets it lazily:

```javascript
function Image(props) {
  const ref = useRef(null);

  // ✅ IntersectionObserver is created lazily once
  function getObserver() {
    if (ref.current === null) {
      ref.current = new IntersectionObserver(onIntersect);
    }
    return ref.current;
  }

  // When you need it, call getObserver()
  // ...
}
```

This avoids creating an expensive object until it’s truly needed for the first time. If you use Flow or TypeScript, you can also give `getObserver()` a non-nullable type for convenience.

#### Is it safe to omit functions from the list of dependencies?

Generally speaking, no. It is only safe to omit a function from the dependency list if nothing in it (or the functions called by it) references props, state, or values derived from them. 

If for some reason you can’t move a function inside an effect, there are a few more options:

- You can try moving that function outside of your component. In that case, the function is guaranteed to not reference any props or state, and also doesn’t need to be in the list of dependencies.
- If the function you’re calling is a pure computation and is safe to call while rendering, you may call it outside of the effect instead, and make the effect depend on the returned value.
- As a last resort, you can add a function to effect dependencies but wrap its definition into the useCallback Hook. This ensures it doesn’t change on every render unless its own dependencies also change.

```javascript
// Not ok:
function Example({ someProp }) {
  function doSomething() {
    console.log(someProp);
  }

  useEffect(() => {
    doSomething();
  }, []); // 🔴 This is not safe (it calls `doSomething` which uses `someProp`)
}

// Ok:
function Example({ someProp }) {
  useEffect(() => {
    function doSomething() {
      console.log(someProp);
    }

    doSomething();
  }, [someProp]); // ✅ OK (our effect only uses `someProp`)
}

// Also ok:
useEffect(() => {
  function doSomething() {
    console.log('hello');
  }

  doSomething();
}, []); // ✅ OK in this example because we don't use *any* values from component scope


// Not ok:
function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);

  async function fetchProduct() {
    const response = await fetch('http://myapi/product/' + productId); // Uses productId prop
    const json = await response.json();
    setProduct(json);
  }

  useEffect(() => {
    fetchProduct();
  }, []); // 🔴 Invalid because `fetchProduct` uses `productId`
  // ...
}

// Ok:
function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // By moving this function inside the effect, we can clearly see the values it uses.
    async function fetchProduct() {
      const response = await fetch('http://myapi/product/' + productId);
      const json = await response.json();
      setProduct(json);
    }

    fetchProduct();
  }, [productId]); // ✅ Valid because our effect only uses productId
  // ...
}
```

#### How to avoid passing callbacks down?

Pass down a `dispatch` function from `useReducer` via `context`:

```javascript
const TodosDispatch = React.createContext(null);

function TodosApp() {
  // Note: `dispatch` won't change between re-renders
  const [todos, dispatch] = useReducer(todosReducer);

  return (
    <TodosDispatch.Provider value={dispatch}>
      <DeepTree todos={todos} />
    </TodosDispatch.Provider>
  );
}

/*
Any child in the tree inside TodosApp can use the dispatch function to pass actions up to TodosApp
*/ 

function DeepChild(props) {
  // If we want to perform an action, we can get dispatch from context.
  const dispatch = useContext(TodosDispatch);

  function handleClick() {
    dispatch({ type: 'add', text: 'hello' });
  }

  return (
    <button onClick={handleClick}>Add todo</button>
  );
}
```

This is both more convenient from the maintenance perspective (no need to keep forwarding callbacks), and avoids the callback problem altogether. Passing `dispatch` down like this is the recommended pattern for deep updates.

### useState

#### Describe the state hook.

`useState`
- returns: the current state value and a function that lets you update it. 
- You can call this function from an event handler or somewhere else. 
- It’s similar to `this.setState` in a class, except it doesn’t merge the old and new state together. 
- The only argument to `useState` is the initial state.
- Note that unlike `this.state`, the state here doesn’t have to be an object — although it can be if you want.
- The initial state argument is only used during the first render.

```javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

- In a class component, the state is accessed as `<p>You clicked {this.state.count} times</p>` but with useState, you can access it directly `<p>You clicked {count} times</p>`.
- In a class, we need to call `this.setState()` to update the state. In a function, we already have `setCount` and `count` as variables, for example, so we don’t need `this`.

```javascript
// In a class:
<button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
</button>

// In a function:
 <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
```

#### What do the square bracket in useState declaration mean?

```javascript
const [fruit, setFruit] = useState('banana');
```

This JavaScript syntax is called “array destructuring”. It means that we’re making two new variables fruit and setFruit, where fruit is set to the first value returned by useState, and setFruit is the second. It is equivalent to this code:

```javascript
var fruitStateVariable = useState('banana'); // Returns a pair
var fruit = fruitStateVariable[0]; // First item in a pair
var setFruit = fruitStateVariable[1]; // Second item in a pair
```

The first item is the current value, and the second is a function that lets us update it. Using `[0]` and `[1]` to access them is a bit confusing because they have a specific meaning. This is why we use array destructuring instead.

#### Can you declare multiple state variables in a single component? 

Yes, you can use the State Hook more than once in a single component.

```javascript
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

#### How does React know which state corresponds to which useState call? 

React relies on the order in which Hooks are called.

#### What are the 2 ways of setting state using setState? 

1. Direct/Normal updates
2. Functional updates: If the new state is computed using the previous state, you can pass a function to setState. The function will receive the previous value, and return an updated value. 

```javascript
/*
The ”+” and ”-” buttons use the functional form, because the updated value is based on the previous value. But the “Reset” button uses the normal form, because it always sets the count back to the initial value.
*/ 
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

If your update function returns the exact same value as the current state, the subsequent rerender will be skipped completely.

#### How can you replicate the behavior setState has with useState for merging state?

Unlike the `setState` method found in class components, `useState` does not automatically merge update objects. You can replicate this behavior by combining the function updater form with object **spread** syntax:

```javascript
setState(prevState => {
  // Object.assign would also work
  return {...prevState, ...updatedValues};
});
```

Another option is useReducer, which is more suited for managing state objects that contain multiple sub-values.

#### How can you do a lazy initialization of state?

The `initialState` argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render:

```javascript
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

#### In what cases does React bail out of a state update?

If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.)

Note that React may still need to render that specific component again before bailing out. That shouldn’t be a concern because React won’t unnecessarily go “deeper” into the tree. If you’re doing expensive calculations while rendering, you can optimize them with `useMemo`.

### useEffect

#### Describe the effect hook.

- The Effect Hook, `useEffect`, adds the ability to perform side effects from a function component. 
- It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API. `useEffect` is essentially these 3 lifecycle methods combined. 
- When you call `useEffect`, you’re telling React to run your “effect” function after flushing changes to the DOM.
- Effects are declared inside the component so they have access to its props and state. 
- By default, React runs the effects after every render — including the first render.
- You can use more than a single effect in a component.
- Hooks let you organize side effects in a component by what pieces are related (such as adding and removing a subscription), rather than forcing a split based on lifecycle methods.
- Effects may also optionally specify how to “clean up” after them by returning a function.
  - Note: The difference between side effects that require cleanup and those that don't are that those that require cleanup return a function, those that don't do not return anything.
- Hooks let us split the code based on what it is doing rather than a lifecycle method name. React will apply every effect used by the component, in the order they were specified.

```javascript
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  /*
   React would unsubscribe from our ChatAPI when the component unmounts, as well as before re-running the effect due to a subsequent render. (If you want, there’s a way to tell React to skip re-subscribing if the props.friend.id we passed to ChatAPI didn’t change.)
  */ 
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  // ...
```

#### What are "side effects"? 

Things like data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.

#### Describe effects that require cleanup.

- There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do.

#### Give an example of an effect that would require cleanup.

Setting up a subscription to some external data source. In that case, it is important to clean up so that we don’t introduce a memory leak!

#### Give an example of using side effects in React classes vs using useEffect in function components that do require cleanup.

In a React class, you would typically set up a subscription in `componentDidMount`, and clean it up in `componentWillUnmount`. For example, let’s say we have a `ChatAPI` module that lets us subscribe to a friend’s online status. Here’s how we might subscribe and display that status using a class. Notice how `componentDidMount` and `componentWillUnmount` need to mirror each other. Lifecycle methods force us to split this logic even though conceptually code in both of them is related to the same effect. Notice that this example also needs a `componentDidUpdate` method to be fully correct. 

```javascript
// In a class
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}
```

```javascript
// useEffect in function component 
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    /*
  We don’t have to return a named function from the effect. We called it cleanup here to clarify its purpose, but you could return an arrow function or call it something different.
    */
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
    /*
    Why a function was returned from the effect: This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect!
    */
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

#### When exactly does React clean up an effect? 

React performs the cleanup when the component unmounts. However, as we learned earlier, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time. 

#### Describe effects that don't require cleanup.

- There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do.
- Sometimes, we want to run some additional code after React has updated the DOM.

#### What are some examples of side effects that don't require cleanup?

Common examples of effects that don’t require a cleanup:
- network requests
- manual DOM mutations
- logging

#### In React, does the render method itself cause side effects?

No, the render method itself shouldn’t cause side effects. 

We typically want to perform our effects after React has updated the DOM. This is why in React classes, we put side effects into componentDidMount and componentDidUpdate.

#### Give an example of using side effects in React classes vs using useEffect in function components that don't require cleanup.

Note that in a class component we have to duplicate the code between these two lifecycle methods in class.

This is because in many cases we want to perform the same side effect regardless of whether the component just mounted, or if it has been updated. Conceptually, we want it to happen after every render — but React class components don’t have a method like this. We could extract a separate method but we would still have to call it in two places.

```javascript
// In a class component:
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

```javascript
// Using hooks:
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

#### What does useEffect do? 

By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. 

#### Why is useEffect called inside a component? 

Placing useEffect inside the component lets us access the state variables (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

#### Does useEffect run after every render? 

Yes! By default, it runs both after the first render and after every update.

#### Explain why the function passed to useEffect is going to be different on every render.

This is intentional. In fact, this is what lets us read the state values (ex. `count`) from inside the effect without worrying about it getting stale. Every time we re-render, we schedule a different effect, replacing the previous one. In a way, this makes the effects behave more like a part of the render result — each effect “belongs” to a particular render. 

#### What is one key differences between useEffect and componentDidMount/componentDidUpdate?

Unlike `componentDidMount` or `componentDidUpdate`, effects scheduled with `useEffect` don’t block the browser from updating the screen. This makes your app feel more responsive. 

The majority of effects don’t need to happen synchronously. 

In the uncommon cases where they do need to happen synchronously (such as measuring the layout), there is a separate `useLayoutEffect` Hook with an API identical to `useEffect`.
 
#### How can you "skip effects", as in skip re-render on a useEffect?

In some cases, cleaning up or applying the effect after every render might create a performance problem. In class components, we can solve this by writing an extra comparison with `prevProps` or `prevState` inside `componentDidUpdate`:

```javascript
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `You clicked ${this.state.count} times`;
  }
}
```

This requirement is common enough that it is built into the `useEffect` Hook API. You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to `useEffect`:

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
// example if count 5 on re-render then it won't re-render. If it then becomes 6, then it will
```

This also works for effects that have a cleanup phase:

```javascript
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // Only re-subscribe if props.friend.id changes
```

If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect. Otherwise, your code will reference stale values from previous renders.

#### What can you do if you want to run an effect and clean it up only once (on mount and unmount)?

If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly from how the dependencies array always works.

If you pass an empty array ([]), the props and state inside the effect will always have their initial values. While passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model, there are usually better solutions to avoid re-running effects too often. Also, don’t forget that React defers running useEffect until after the browser has painted, so doing extra work is less of a problem.

#### Why is the clean-up function runs before the component is removed from the UI? 

To prevent memory leaks.

Additionally, if a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect. 

### useContext 

#### Describe the useContext hook.

It lets you subscribe to React context without introducing nesting.

```javascript
function Example() {
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  // ...
}
```

The React Context API provides a way to pass data through the component tree without having to pass props down manually at every level.

Accepts a context object (the value returned from `React.createContext`) and returns the current context value for that context. The current context value is determined by the value prop of the nearest `<MyContext.Provider>` above the calling component in the tree.

When the nearest `<MyContext.Provider>` above the component updates, this Hook will trigger a rerender with the latest context value passed to that `MyContext` provider. Even if an ancestor uses `React.memo` or `shouldComponentUpdate`, a rerender will still happen starting at the component itself using useContext.

Don’t forget that the argument to useContext must be the context object itself:
- Correct Usage: `useContext(MyContext)`

A component calling `useContext` will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using memoization.

```javascript
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

#### How can you optimize if re-rendering the component is expensive?

**Preferred Method/Option 1: Split contexts that don't change together**  

Example: If we just need `appContextValue`.theme in many components but `appContextValue` itself changes too often, we could split `ThemeContext` from `AppContext`. Now any change of `AppContext` won't re-render ThemeContext consumers. This is the preferred fix. Then you don't need any special bailout.

```javascript
function Button() {
  let theme = useContext(ThemeContext);
  // The rest of your rendering logic
  return <ExpensiveTree className={theme} />;
}
```

**Option 2: Split your component in two, put `memo` in between**

If for some reason you can't split out contexts, you can still optimize rendering by splitting a component in two, and passing more specific props to the inner one. You'd still render the outer one, but it should be cheap since it doesn't do anything.

```javascript
function Button() {
  let appContextValue = useContext(AppContext);
  let theme = appContextValue.theme; // Your "selector"
  return <ThemedButton theme={theme} />
}

const ThemedButton = memo(({ theme }) => {
  // The rest of your rendering logic
  return <ExpensiveTree className={theme} />;
});
```

**Option 3: One component with `useMemo` inside**

Finally, we could make our code a bit more verbose but keep it in a single component by wrapping return value in `useMemo` and specifying its dependencies. Our component would still re-execute, but React wouldn't re-render the child tree if all `useMemo` inputs are the same.

```javascript
function Button() {
  let appContextValue = useContext(AppContext);
  let theme = appContextValue.theme; // Your "selector"

  return useMemo(() => {
    // The rest of your rendering logic
    return <ExpensiveTree className={theme} />;
  }, [theme])
}
```

### Custom Hooks

#### Describe custom hooks.

- Custom Hooks are more of a convention than a feature.
- If a function’s name starts with ”use” and it calls other Hooks, we say it is a custom Hook.
- The `useSomething` naming convention is how our linter plugin is able to find bugs in the code using Hooks.
- The state of each component that calls a custom hook is completely independent. Hooks are a way to reuse stateful logic, not state itself. In fact, each call to a Hook has a completely isolated state — so you can even use the same custom Hook twice in one component.
- Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. Its name should always start with use so that you can tell at a glance that the rules of Hooks apply to it.

#### What is a custom hook?

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. 

#### When do you use custom hooks?

Sometimes, we want to reuse some stateful logic between components. Traditionally, there were two popular solutions to this problem: higher-order components and render props. Custom Hooks let you do this, but without adding more components to your tree.

Custom Hooks let you combine Hooks provided by React into your own abstractions, and reuse common stateful logic between different components.

#### Do two components using the same Hook share state? 

No. Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

#### Give an example of a custom hook.

A `FriendStatus` component that calls the `useState` and `useEffect` Hooks to subscribe to a friend’s online status. Let’s say we also want to reuse this subscription logic in another component.

First, we’ll extract this logic into a custom Hook called `useFriendStatus`:

```javascript
import React, { useState, useEffect } from 'react';

// It takes friendID as an argument, and returns whether our friend is online.
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

Now we can use it from both components:

```javascript
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

```javascript
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

### useReducer

#### Describe the useReducer hook.

It lets you manage local state of complex components with a reducer.

```javascript
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer);
  // ...
```

```javascript
// reducer => Accepts a reducer of type (state, action) => newState
// returns the current state paired with a dispatch method
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
This is an alternate to `useState`.

```javascript
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

#### What arguments does useReducer take in?

It accepts a reducer of type `(state, action) => newState`.

#### What does useReducer return?

It returns the current state paired with a dispatch method.

#### When is useReducer preferable to useState?

`useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

`useReducer` also lets you optimize performance for components that trigger deep updates because you can pass `dispatch` down instead of callbacks. React guarantees that `dispatch` function identity is stable and won’t change on re-renders.

#### What are the 2 ways to initialize useReducer state?

1. The simplest way is to pass the initial state as a second argument: 

``` javascript 
  const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}
  );
```

2. Lazy intialization: To do this, you can pass an `init` function as the third argument. The initial state will be set to `init(initialArg)`.It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for resetting the state later in response to an action.

```javascript

function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

#### How can you bail out of a dispatch?

If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or firing effects. (React uses the `Object.is` comparison algorithm.)

Note that React may still need to render that specific component again before bailing out. That shouldn’t be a concern because React won’t unnecessarily go “deeper” into the tree. 

If you’re doing expensive calculations while rendering, you can optimize them with `useMemo`.

### useCallback

#### What does useCallback return?

It returns a memoized callback.

#### How does useCallback work?

Pass an inline callback and an array of dependencies. `useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed. 

`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.

#### In what case if useCallback helpful?

This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).

### useMemo

#### How does useMemo work?

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

Remember that the function passed to useMemo runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in useEffect, not useMemo.

You may rely on `useMemo` as a performance optimization, not as a semantic guarantee. In the future, React may choose to “forget” some previously memoized values and recalculate them on next render, e.g. to free memory for offscreen components. Write your code so that it still works without `useMemo` — and then add it to optimize performance.

#### What does useMemo return?

A memoized value.

#### What happens if no array is provided?

A new value will be computed on every render.

### useRef

#### How does useRef work?

```javascript
const refContainer = useRef(initialValue);
```

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. 

Essentially, `useRef` is like a “box” that can hold a mutable value in its .current property.

You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with `<div ref={myRef} />`, React will set its `.current` property to the corresponding DOM node whenever that node changes.

However, `useRef()` is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

This works because `useRef()` creates a plain JavaScript object. The only difference between `useRef()` and creating a `{current: ...}` object yourself is that `useRef` will give you the same ref object on every render.

#### Does useRef notify you when content changes?

No, useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render.

### useImperativeHandle

#### How does useImperativeHandle work?

```javascript
useImperativeHandle(ref, createHandle, [deps])
```

`useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`. As always, imperative code using refs should be avoided in most cases. `useImperativeHandle` should be used with forwardRef:

```javascript
/*
In this example, a parent component that renders <FancyInput ref={inputRef} /> 
would be able to call inputRef.current.focus().
*/
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);

```

### useLayoutEffect

#### How does useLayoutEffect work?

- The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations. 
- Use this to read layout from the DOM and synchronously re-render. 
- Updates scheduled inside `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
- Prefer the standard `useEffect` when possible to avoid blocking visual updates.

### useDebugValue

#### How does useDebugValue work?

```javascript
useDebugValue(value)
```

`useDebugValue` can be used to display a label for custom hooks in React DevTools.

Example custom hook:
```javascript
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
```

#### When is it recommended to use useDebugValue?

It is not recommended to add debug values to every custom Hook. It’s most valuable for custom Hooks that are part of **shared libraries**.

#### How can you format useDebugValue?

`useDebugValue` accepts a formatting function as an optional second parameter. This function is only called if the Hooks are inspected. It receives the debug value as a parameter and should return a formatted display value.

For example a custom Hook that returned a `Date` value could avoid calling the `toDateString` function unnecessarily by passing the following formatter:

```javascript
useDebugValue(date, date => date.toDateString());
```





## Resources
1. https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom
2. https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications
3. https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
4. https://formik.org/
5. https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
6. https://www.interviewbit.com/react-interview-questions/ - Up to Q5
7. https://medium.com/@baphemot/a-react-job-interview-recruiter-perspective-f1096f54dd16 - Did not add these in yet

Search by: interviewing candidate for react