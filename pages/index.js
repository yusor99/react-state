import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handelChange = (e) => {
    setTodo(e.target.value);
  };
  const addNew = () => {
    setTodos([ ...todos, todo ]);
    setTodo("");
  };
  return (
    <div className="container">
      <div className="form">
        <input placeholder="write here" value={todo} onChange={handelChange} />
        <button onClick={addNew}>Add</button>
      </div>
      <div>
        <div className="list">
          {todos.map((item, index) => (
            <div className="list-item" key={index}>
              <p>{item}</p>
              <button
                onClick={() => setTodos(todos.filter((el) => el !== item))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
