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

**2. What does JSX allow us to do?** 

It allows us to write HTML-like code inside JavaScript and place them in the DOM without using functions like `appendChild( )` or `createElement( )`.
As stated in the official docs of React, JSX provides syntactic sugar for `React.createElement(component, props, ...children)` function.

**3. Can React applications be written without JSX?** Yes

**4. Give a code example of using JSX vs. not using JSX.** 

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

## Virtual DOM

**1. What is the Virtual DOM? How does React use the Virtual DOM to render the UI?** 

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called **reconciliation**.   

![virtual-dom](img/virtual-dom.png)

**2.Why was the Virtual DOM introduced?** 

DOM manipulation is an integral part of any web application, but DOM manipulation is quite slow when compared to other operations in JavaScript.  

The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.  

For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, the entire list gets rendered again instead of just rendering the item that was changed/updated. This is called **inefficient updating**.

To address the problem of inefficient updating, the react team introduced the concept of virtual DOM.

**3.How does the Virtual DOM work?** 

For every DOM object, there is a corresponding virtual DOM object(copy), which has the same properties.

The main difference between the real DOM object and the virtual DOM object is that any changes in the virtual DOM object will not reflect on the screen directly. The virtual DOM object is like a  blueprint of the real DOM object.

Whenever a JSX element gets rendered, every virtual DOM object gets updated.

React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects.
Whenever the virtual DOM gets updated, React compares the two virtual DOMs and gets to know about which virtual DOM objects were updated.
After knowing which objects were updated, React renders only those objects inside the real DOM instead of rendering the complete real DOM. This way, with the use of virtual DOM, react solves the problem of inefficient updating.

**4. Is updating the Virtual DOM object inefficient?**

No, updating the virtual DOM is much faster than updating the real DOM since we are just updating the blueprint of the real DOM.

## Functional vs. Class Components

**1. How did the 2 compare before the introduction of hooks?** 

Functional components were stateless components whereas class components were stateful.

**2. What are some ways the 2 compare?** 

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

**3. Give an example of how props are handled by functional components vs class components.**

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

**4. Give an example of how state is handled in a functional component vs. a class component.**

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
## Controlled vs. Uncontrolled Components






## Resources
1. https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom
2. https://www.interviewbit.com/react-interview-questions/

Up to Q5