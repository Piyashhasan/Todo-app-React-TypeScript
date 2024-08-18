import { FormEvent, useState } from "react";
import "./addTodo.css";
import { useTodosContext } from "../../context/TodoContext";

const AddToDo = () => {
  const { handleAddTodo } = useTodosContext();

  const [todos, setTodos] = useState("");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddTodo(todos);
    setTodos("");
  };

  // ==================== HTML ====================
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="mt-5 d-flex justify-content-center todo-add-form"
      >
        <input
          className="form-control w-25 p-2 rounded-0 px-3"
          type="text"
          placeholder="Type your todos"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success mx-3 rounded-0 px-4">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
