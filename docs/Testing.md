# Testing

## General 

#### What are the 2 categories of testing React components?

1. **Rendering component trees** in a simplified test environment and asserting on their output.
2. **Running a complete app** in a realistic browser environment (also known as “end-to-end” tests).

#### When choosing testing tools, what are a few tradeoffs worth considering?

- **Iteration speed vs Realistic environment:** Some tools offer a very quick feedback loop between making a change and seeing the result, but don’t model the browser behavior precisely. Other tools might use a real browser environment, but reduce the iteration speed and are flakier on a continuous integration server.
- **How much to mock:** With components, the distinction between a “unit” and “integration” test can be blurry. If you’re testing a form, should its test also test the buttons inside of it? Or should a button component have its own test suite? Should refactoring a button ever break the form test?

Different answers may work for different teams and products.

## Testing Environments

#### What are test runners?

- Test runners like Jest, mocha, ava let you write test suites as regular JavaScript, and run them as part of your development process. 
- Additionally, test suites are run as part of continuous integration.
- Jest is widely compatible with React projects, supporting features like mocked modules and timers, and jsdom support. If you use Create React App, Jest is already included out of the box with useful defaults.
- Libraries like mocha work well in real browser environments, and could help for tests that explicitly need it
- End-to-end tests are used for testing longer flows across multiple pages, and require a different setup.

#### What are event simulation helpers?

In an environment where you can’t simulate a DOM (e.g. testing React Native components on Node.js), you could use event simulation helpers to simulate interactions with elements. Alternately, you could use the `fireEvent` helper from `@testing-library/react-native`.

#### What are some good frameworks for end to end testing?

Frameworks like Cypress, puppeteer and webdriver are useful for running end-to-end tests.

#### What does it mean to be mocking functions?

When writing tests, we’d like to mock out the parts of our code that don’t have equivalents inside our testing environment (e.g. checking `navigator.onLine` status inside Node.js). Tests could also spy on some functions, and observe how other parts of the test interact with them. It is then useful to be able to selectively mock these functions with test-friendly versions.

This is especially useful for data fetching. It is usually preferable to use “fake” data for tests to avoid the slowness and flakiness due to fetching from real API endpoints. This helps make the tests predictable. 

#### What are some libraries that support mocked functions?

- Jest
- Sinon

#### When is it useful to mock modules?

Some components have dependencies for modules that may not work well in test environments, or aren’t essential to our tests. It can be useful to selectively mock these modules out with suitable replacements. 

#### What are some libraries that support mocking modules?

On Node.js, runners like Jest support mocking modules. You could also use libraries like mock-require.

#### In what cases would you mock timers?

Components might be using time-based functions like `setTimeout`, `setInterval`, or `Date.now`. In testing environments, it can be helpful to mock these functions out with replacements that let you manually “advance” time. This is great for making sure your tests run fast! Tests that are dependent on timers would still resolve in order, but quicker. 

#### What are some libraries that can be used to mock timers?

Most frameworks, including Jest, sinon and lolex, let you mock timers in your tests.

#### What can you do in cases you do not want to mock timers?

Sometimes, you may not want to mock timers. For example, maybe you’re testing an animation, or interacting with an endpoint that’s sensitive to timing (like an API rate limiter). Libraries with timer mocks let you enable and disable them on a per test/suite basis, so you can explicitly choose how these tests would run.

#### In what cases would you want to do end-to-end testing?

End-to-end tests are useful for testing longer workflows, especially when they’re critical to your business (such as payments or signups). For these tests, you’d probably want to test how a real browser renders the whole app, fetches data from the real API endpoints, uses sessions and cookies, navigates between different links. You might also likely want to make assertions not just on the DOM state, but on the backing data as well (e.g. to verify whether the updates have been persisted to the database).

#### What frameworks/libraries can you use for end-to-end testing?

You would use a framework like Cypress or a library like puppeteer so you can navigate between multiple routes and assert on side effects not just in the browser, but potentially on the backend as well.

## JSDOM

#### What is JSDOM? 

- Tests often run in an environment without access to a real rendering surface like a browser. For these environments, we recommend simulating a browser with jsdom, a lightweight browser implementation that runs inside Node.js.
- jsdom is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, for use with Node.js. In general, the goal of the project is to emulate enough of a subset of a web browser to be useful for testing and scraping real-world web applications.
- In most cases, jsdom behaves like a regular browser would, but doesn’t have features like layout and navigation. This is still useful for most web-based component tests, since it runs quicker than having to start up a browser for each test. It also runs in the same process as your tests, so you can write code to examine and assert on the rendered DOM.
- Just like in a real browser, jsdom lets us model user interactions; tests can dispatch events on DOM nodes, and then observe and assert on the side effects of these actions.
- A large portion of UI tests can be written with the above setup: using Jest as a test runner, rendered to jsdom, with user interactions specified as sequences of browser events, powered by the `act()` helper. For example, a lot of React’s own tests are written with this combination.

## Mocha

#### What is mocha? 

If you’re writing a library that tests mostly browser-specific behavior, and requires native browser behavior like layout or real inputs, you could use a framework like mocha.

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

#### What is the WHATWG? 

The Web Hypertext Application Technology Working Group is a community of people interested in evolving HTML and related technologies. The WHATWG was founded by individuals from Apple Inc., the Mozilla Foundation and Opera Software, leading Web browser vendors, in 2004. 

## Jest

#### What is JEST? 

- Jest is a JavaScript test runner that lets you access the DOM via jsdom. 
- While jsdom is only an approximation of how the browser works, it is often good enough for testing React components.
- Jest provides a great iteration speed combined with powerful features like mocking modules and timers so you can have more control over how the code executes.

## React Testing Library

- React Testing Library is a set of helpers that let you test React components without relying on their implementation details. 
- This approach makes refactoring a breeze and also nudges you towards best practices for accessibility. 
- Although it doesn’t provide a way to “shallowly” render a component without its children, a test runner like Jest lets you do this by mocking.

## Resources
1. https://whatwg.org/
2. https://github.com/jsdom/jsdom
3. https://mochajs.org/
