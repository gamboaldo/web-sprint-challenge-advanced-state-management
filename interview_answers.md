# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   //

//
---It requires less code, and because there's no need of extra libraries, bundle sizes are reduced. The main benefit of using Context is that it is simpler to use and is a great way of passing state down to any level of a component tree without having to pass props down through traversal.
//

//

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   //
   Global Store - Is what holds all the data your application uses.
   Reducer - is what manipulates that data when it receives an action.
   Action - is what tells reducer to manipulate the store data, it carries the name and (not required) some data.

------Reducer is usually in a format of a switch statement, that switches between all possible Actions (Cases) and then manipulates the Store data based on action. When a reducer data changes within the redux, the properties in your components are changed and then the re-render ocurrs.

//

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

//

------ It allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

//

4. What is your favorite state management system you've learned and this sprint? Please explain why!

-----I love the simplicity that comes with context api, but I love how powerful redux is. Redux is a better state management since context is really mostly for giving nested components access to state from any level in the state tree within the same source branch. You cannot access the state from a side branch that the context is not on top of on the state tree. Its clear why a large scale app would prefer redux.
