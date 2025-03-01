export function EmptyTodo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        flexDirection: "column",
        gap: "0.5rem",
        textAlign: "center",
      }}
    >
      <h3>
        No Pending <strong>Task(s)</strong>
      </h3>
      <p>
        Simple Get started by Adding a TODO in the search box then hit{" "}
        <strong>Enter</strong>
      </p>
    </div>
  );
}
