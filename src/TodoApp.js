import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return; // prevent empty tasks
    setTodos([...todos, task]);
    setTask(""); // clear input
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Todo App</h2>

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <div style={{ marginTop: "20px" }}>
        {todos.length === 0 ? (
          <p>No tasks yet! Add one above.</p>
        ) : (
          todos.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#2e2e2e",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span>{item}</span>
              <button
                onClick={() => deleteTask(index)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoApp;
