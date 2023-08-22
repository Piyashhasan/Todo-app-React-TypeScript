import { ReactNode, createContext, useContext, useState } from "react";

// --- children props type ---
export type TodosProviderProps = {
  children: ReactNode;
};

// --- todos type ---
export type Todos = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

// --- context type ---
export type TodosContext = {
  todos: Todos[];
  handleAddTodo: (task: string) => void;
  handleCompleteTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

// --- create context ---
// eslint-disable-next-line react-refresh/only-export-components
export const todosContext = createContext<TodosContext | null>(null);

// --- MAIN FUNCTION ---
export const TodoContext = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todos[]>(() => {
    try {
      const getTodo = JSON.parse(localStorage.getItem("Todos") || "[]");
      return getTodo;
    } catch (error) {
      return [];
    }
  });

  //   -- handle add todo in list ---
  const handleAddTodo = (task: string) => {
    const newTodos: Todos = {
      id: Math.random().toString(),
      task: task,
      completed: false,
      createdAt: new Date(),
    };
    const todoItem = [...todos, newTodos];
    localStorage.setItem("Todos", JSON.stringify(todoItem));
    setTodos(todoItem);
  };

  const handleCompleteTodo = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("Todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleDeleteTodo = (id: string) => {
    const afterDeleteTodoList = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("Todos", JSON.stringify(afterDeleteTodoList));
    setTodos(afterDeleteTodoList);
  };

  const provideData = {
    todos,
    setTodos,
    handleAddTodo,
    handleDeleteTodo,
    handleCompleteTodo,
  };

  return (
    <todosContext.Provider value={provideData}>
      {children}
    </todosContext.Provider>
  );
};

// --- context consumer ---
// eslint-disable-next-line react-refresh/only-export-components
export const useTodosContext = () => {
  const todosList = useContext(todosContext);
  if (!todosList) {
    throw new Error("error form consumer context");
  }
  return todosList;
};
