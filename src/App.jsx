import "./App.css";
import { EmptyTodo } from "./EmptyTodo";
import { Task } from "./Task";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [addTask, setAddTask] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setAddTask(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    if (event.key === "Enter" && event.target.value !== "") {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: addTask,
        isCompleted: false,
      };
      setTodoList([...todoList, task]);

      event.target.value = "";
    }
  }
  function deleteTask(id) {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  function markAsCompleted(id) {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: true };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="App">
      <div className="container">
        <div className="todo-header">
          <h2 className="title">TODO</h2>
          <p>
            Built with ❤ by{" "}
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "700",
              }}
              href="https://godstimeweb.vercel.app"
            >
              Godstime Pious
            </a>
          </p>
        </div>

        <div className="todo-container">
          <div className="todo-input">
            <form name="todo-form">
              <input
                id="todoElement"
                onChange={handleChange}
                onKeyDown={addTodo}
                type="text"
                className="todo-input-element"
                placeholder="Create a new todo"
              />
            </form>
          </div>

          <div className="todo-list">
            {todoList.length > 0 ? (
              todoList.map((task) => {
                return (
                  <Task
                    key={task.id}
                    taskName={task.taskName}
                    id={task.id}
                    deleteTask={deleteTask}
                    markAsCompleted={markAsCompleted}
                    isCompleted={task.isCompleted}
                  />
                );
              })
            ) : (
              <EmptyTodo />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
