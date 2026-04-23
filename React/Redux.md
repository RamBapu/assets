# Redux

### Redux

**Redux** is a predictable state management library used to manage **global application state** in a centralized store. Instead of passing props deeply (prop drilling), Redux allows any component to access shared state.

- Entire app state is stored in **one store**
- You cannot directly modify state
- **Reducers** update state based on actions

Component → dispatch(action) → reducer → store updates → UI re-renders

```js
// actions.js
export const increment = () => ({ type: 'INCREMENT' });

// reducer.js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export default counterReducer;

// store.js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;

// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

```

### Redux Terminologies

- store to hold app state
- actions with type and payload
- reducer functions to update state based on actions
- dispatch to send actions to reducer
- useSelector to read data from store

### Problems with Traditional Redux

- Too much boilerplate
- Complex setup (store, reducers, actions separately)
- Middleware needed for async handling

### Redux Toolkit

**Redux Toolkit** is the **official, recommended way** to write Redux logic. It simplifies Redux by reducing boilerplate and providing built-in best practices.

### Uses of Redux Toolkit

- configureStore to combine all reducers
- slices for each feature - state, actions and reducers
- mutable logic converted to immutable updates
- Redux devtools enabled
- middleware included (Redux thunk)

### Redux toolkit example

```js
// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
```

```js
// src/features/users/userSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../lib/axios";

// Async thunk
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
```

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
```

```js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users</h1>
      {data.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

### Redux Toolkit async handling

In Redux Toolkit, we use createAsyncThunk to handle API calls. It manages loading, success, and error states automatically. We define API logic inside the thunk and handle responses using extraReducers. This keeps async logic clean and centralized.

### Redux Quiz

- Why reducer is pure function
- Why state is immutable in redux
- Can we have multiple reducers
- Redux thunk vs redux saga
- How to introduce multiple middlewares in Redux
