import { useState } from "react";
import "./TaskManager.css";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  function addTask() {
    if (taskTitle.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle("");
  }

  function toggleTaskCompletion(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="task-container">
      <h1>Task Manager</h1>
      <p>Add tasks and mark them as completed.</p>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">No tasks yet. Add your first task.</p>
        ) : (
          tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <div>
                <h2 className={task.completed ? "completed" : ""}>
                  {task.title}
                </h2>
                <p>Status: {task.completed ? "Completed" : "Not Completed"}</p>
              </div>

              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskManager;
