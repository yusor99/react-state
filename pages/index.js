import { useState, useEffect } from "react";
import TodoItem from '../com/todoitem';
import TodoForm from '../com/todoform';
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handelChange = (e) => {
    setTodo(e);
  };
  const addNew = () => {
    if (todo != "") {
      setTodos([...todos, todo]);
      setTodo("");
      localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    }
  };
  useEffect(() => {
    const _todos = localStorage.getItem("todos");
    if (_todos) {
      setTodos(JSON.parse(_todos));
    }
  }, []);

  return (
    <div className="container">
      <TodoForm todo={todo} 
      setTodo={setTodo}
       todos={todos} 
       add={addNew}
       handelChange={handelChange}
       setTodos={setTodos} 
       />
      <div>
        <div className="list">
          {todos.map((item, index) => (
            <TodoItem key={index}
             item={item} 
              todos={todos} 
              setTodos={setTodos} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
