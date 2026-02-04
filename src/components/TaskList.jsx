import React from "react";

const TaskList = () => {
  return (
    <>
      <div className="task-grid">
        {/*task card 1 */}
        <div className="task-card" style={{ position: "relative" }}>
          <h3>complate React</h3>
          <p>Finish task manager UI and styling</p>

          <div className="task-meta">
            <span>Due:2026-02-10</span>
            <span className="priority-badge priority-high">High</span>
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
      </div>
    </>
  );
};

export default TaskList;
