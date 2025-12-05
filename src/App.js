import Welcome from "./Welcome";
import UserCard from "./UserCard";
import Counter from "./Counter";
import LiveText from "./LiveText";
import ToggleMessage from "./ToggleMessage";
import UserList from "./UserList";
import TodoApp from "./TodoApp";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to React!</h1>
      <p>Your practice sessions are going great.</p>

      {/* ---------- Reusable Components ---------- */}
      <Welcome name="Prasath" />
      <Welcome name="Deepak" />
      <Welcome name="Jason" />

      <hr />

      {/* ---------- State Example (useState) ---------- */}
      <Counter />

      <hr />

      {/* ---------- Controlled Input Example ---------- */}
      <LiveText />

      <hr />

      {/* ---------- Conditional Rendering ---------- */}
      <ToggleMessage />

      <hr />

      {/* ---------- List Rendering ---------- */}
      <UserList />

      <hr />

      {/* ---------- Mini Project: TODO App ---------- */}
      <TodoApp />
    </div>
  );
}

export default App;
