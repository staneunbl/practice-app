// import logo from './logo.svg';
import TodoList from "./components/TodoList.tsx";
import TaskManager from "./components/TaskManager.tsx";
import CounterApp from "./components/CounterApp.tsx";
import UserProfile from "./components/UserProfile.tsx";
import TaskTracker from "./components/TaskTracker.tsx";
import PropsProject from "./components/PropsProject.tsx";


function App() {
  return (
    <div className="App">
      <TodoList />
      <TaskManager />
      <CounterApp />
      <UserProfile />
      <TaskTracker />
      <PropsProject />
    </div>
  );
}

export default App;
