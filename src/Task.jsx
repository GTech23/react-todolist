/* eslint-disable react/prop-types */
export function Task(props) {
  return (
    <div key={props.id} className="todo-item">
      <p
        style={{
          color: props.isCompleted ? "gray" : "black",
          textDecoration: props.isCompleted ? "line-through" : "none",
        }}
        className="todo-text"
      >
        {props.taskName}
      </p>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button
          style={{
            backgroundColor: "dodgerblue",
            color: "white",
            padding: ".4rem 1rem",
            border: "none",
            borderRadius: "15px",
            opacity: props.isCompleted ? "0.5" : "1",
            cursor: props.isCompleted ? "not-allowed" : "pointer",
          }}
          className="todo-complete-button"
          onClick={() => {
            props.markAsCompleted(props.id);
          }}
        >
          {props.isCompleted ? "Completed" : "Complete"}
        </button>

        <button
          className="todo-delete-button"
          onClick={() => {
            props.deleteTask(props.id);
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
