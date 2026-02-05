import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <>
      <div className="task-grid">
        {/*task card 1 */}
        {tasks.map((task) => (
          <div className="task-card" style={{ position: "relative" }}>
            <h3>{task.title}</h3>
            <p>{task.desc}</p>

            <div className="task-meta">
              <span>Due:{task.date}</span>
              <span className="priority-badge priority-high">
                {task.priority}
              </span>
            </div>
            <div className="task-actions">
              <button
                className="btn-icon"
                style={{ background: "#00d2ff" }}
                title="edit task"
              >
                ✏
              </button>
              <button
                className="btn-icon"
                style={{ background: "#00b894" }}
                title="mark complete"
              >
                ✔
              </button>
              <button
                className="btn-icon"
                style={{ background: "#ff416c" }}
                title="delete task"
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
