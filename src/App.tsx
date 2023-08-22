import "./App.css";
import AddToDo from "./components/AddToDo/AddToDo";
import NavBar from "./components/Nav/NavBar";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="container app">
      <h1 className="text-center mt-5">TODO NEXT + TYPESCRIPT</h1>
      <section>
        <AddToDo />
        <NavBar />
        <Todos />
      </section>
    </div>
  );
}

export default App;
