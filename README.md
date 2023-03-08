
# React Hooks

In this repository i want to explain react-hooks with to ways implementation:

- Class way
- Hook way



## What is react hooks?

React follows the principle of component-based architecture. A component in React is an isolated and reusable piece of code. The components can be of two types – class components and functional components.

Components in React can be stateful or stateless:

* A stateful component declares and manages local state in it.
* A stateless component is a pure function that doesn't have a local state and side-effects to manage.


## React Hooks and Stateful Logic

With React Hooks, we can isolate stateful logic and side-effects from a functional component. Hooks are JavaScript functions that manage the state's behaviour and side effects by isolating them from a component.
So, we can now isolate all the stateful logic in hooks and use (compose them, as hooks are functions, too) into the components.

## What exactly are react Hooks

React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.

* useState: To manage states. Returns a stateful value and an updater function to update it.
* useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
* useContext: To return the current value for a context.
* useReducer: A useState alternative to help with complex state management.
* useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
* useMemo: It returns a memoized value that helps in performance optimizations.
* useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.
* useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
* useDebugValue: Helps to display a label in React DevTools for custom hooks.