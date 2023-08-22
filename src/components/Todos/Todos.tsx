import { useTodosContext } from "../../context/TodoContext";
import "./todos.css";
import { useLocation } from "react-router-dom";

const Todos = () => {
  const { todos, handleDeleteTodo, handleCompleteTodo } = useTodosContext();

  // --- extract url endpoint ---
  const location = useLocation();
  const path = location.pathname;

  let filterTodos = todos;

  if (path === "/active") {
    filterTodos = filterTodos.filter((todo) => !todo.completed);
  }
  if (path === "/complete") {
    filterTodos = filterTodos.filter((todo) => todo.completed);
  }

  // ==================== HTML ====================
  return (
    <div className="container mt-5">
      {filterTodos.map((todo, index) => {
        return (
          <div
            key={index}
            className="todoList w-50 my-3 mx-auto p-3 d-flex align-items-center justify-content-between"
          >
            <div className="d-flex ">
              <input
                type="checkbox"
                id=""
                checked={todo.completed}
                onChange={() => handleCompleteTodo(todo.id)}
              />

              <h5
                className={`${
                  todo.completed
                    ? "m-0 mx-3 text-decoration-line-through text-danger"
                    : "m-0 mx-3"
                }`}
              >
                {todo.task}
              </h5>
            </div>
            {todo.completed && (
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="btn btn-danger rounded-0"
              >
                Delete
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
