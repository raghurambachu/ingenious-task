import React, { useReducer } from "react";
import Sidebar from "./components/sidebar";
import TabSection from "./components/tabs";
import Tasks from "./components/tasks";

// Status of completion of tasks
const initialState = {
  selectedTask: 1,
  isCompleted: {
    1: false,
    2: false,
    3: false,
    4: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, selectedTask: action.payload };
    case "SET_COMPLETED":
      return { isCompleted: { ...state.isCompleted, [action.payload]: true } };
    default:
      return state;
  }
}

function App() {
  const [appState, appDispatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-white">
      <main className="min-h-screen grid grid-cols-10 py-8 p-10">
        <Sidebar />
        <section className="main-content col-span-8 bg-gray-100 rounded-lg grid grid-cols-3 p-6">
          <Tasks appState={appState} appDispatch={appDispatch} />
          <TabSection appState={appState} appDispatch={appDispatch} />
        </section>
      </main>
    </div>
  );
}

export default App;
