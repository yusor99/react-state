import { useState, useEffect } from "react";

import Bar from '../com/bar';
import Foo from '../com/foo'
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  return (
    <div className="container">
      
        <Bar/>
        <Foo/>
      </div>
    );
  };
 

export default Home;
