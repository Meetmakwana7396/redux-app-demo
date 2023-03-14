# redux-app-demo

Hey everyone! I wanted to share a repo that I recently created that demonstrates the basic use of Redux Toolkit. As you may know, Redux is a state management library that can be used with React to manage the state of an application. With Redux Toolkit, the process is made even easier and more efficient, thanks to its simplified store setup and reducer logic. In my demo, you can see how I set up my Redux store, created actions and reducers using the Redux Toolkit, and integrated it with my React components using the useSelector and useDispatch hooks from the React-Redux library. I hope this demo can be a helpful resource for anyone looking to learn more about Redux Toolkit and how it can be used with React. Feel free to check it out and let me know if you have any questions or feedback!

> I am Guessing that you're Already Pretty Good with React and now You're Trying to Understand Concept of Redux Toolkit(RTK).

## Step 1: Install Redux Toolkit

To get started with Redux Toolkit, you first need to install it. You can do this by running the following command in your terminal:

###### Add the Redux Toolkit and React-Redux packages to your project:

```javascript
npm install @reduxjs/toolkit react-redux
```

## Step 2: Set up your Redux store

To create a Redux store using Redux Toolkit, you need to import the configureStore function from the package and use it to create your store. Here's an example:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});
```

In this example, rootReducer is a function that combines all of your application's reducers into a single reducer that can be passed to the configureStore function.

## Step 3: Define your Redux slices

Redux Toolkit uses slices to define pieces of your Redux state and the associated reducers and actions. To define a slice, you need to use the createSlice function from the package.

Here's an example:

```javascript
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [], // We have Declared Empty Array as initial State
  reducers: {
    addUser(state, action) {
      state.push(action.payload); //puses data into array(initialState: [])
    },
    removeUser(state, action) {
      state.splice(action.payload, 1); //Removes Single Element From Array
    },
    removeAllUser(state, action) {
      return []; // Empty The Whole Array
    },
  },
});
console.log(userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeAllUser, removeUser } = userSlice.actions;
```

In this example, we define a `user` slice that has an initial state of [] (empty array) and three reducers: p `addUser`, `removeUser` and `removeAllUser`.

## Step 4: Add your slices to the store

To add your slices to the store, you need to pass them as properties to the reducer object when creating the store. Here's an example:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
```

In this example, userSlice is a function(can call SLICE also) that combines all of your application's reducers into a single reducer that can be passed to the configureStore function.

## Step 5: Use your Redux state in your components

To use your Redux state in your React components, you need to use the useSelector hook from the react-redux package. Here's an example:

```javascript
//Displaying Store Array
const data = useSelector((state) => {
  return state.users;
});
```

In this example, we use the useSelector hook to select the user state from the Redux store and assign it to the data variable.

## Step 6: Dispatch Redux actions from your components

To dispatch Redux actions from your React components, you need to use the useDispatch hook from the react-redux package. Here's an example:

```javascript
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllUser } from "../store/slices/UserSlice";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="btn btn-danger" onClick={() => dispatch(removeAllUser())}>
        Delete All User
      </div>
    </div>
  );
};

export default DeleteAllUsers;
```

In this example, we use the useDispatch hook to get a reference to the Redux dispatch function, and we use it to dispatch the removeAllUser action when the user clicks a button.

And that's it! With these steps, you should now have a basic understanding of how to implement Redux Toolkit in your React application.

#### Demo: https://redux-simplified.netlify.app/
