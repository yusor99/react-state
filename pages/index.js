import { useState, useEffect } from "react";
import { Button, Row, Col, Input } from "antd";
import { FolderAddOutlined, DeleteOutlined } from "@ant-design/icons";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handelChange = (e) => {
    setTodo(e.target.value);
  };
  const addNew = () => {
    if(todo!=""){setTodos([...todos, todo]);
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
      <div className="form">
        <Row gutter={20}>
          <Col span={20}>
            <Input
              placeholder="write here"
              value={todo}
              onChange={handelChange}
            />
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={addNew} style={{ width: "100%" }}>
              Add <FolderAddOutlined />
            </Button>
          </Col>
          
        </Row>
      </div>
      <div>
        <div className="list">
          {todos.map((item, index) => (
            <div className="list-item" key={index}>
              <Row gutter={20}>
                <Col span={21}>
                  <p>{item}</p>
                </Col>
                <Col span={3}>
                  <Button  danger
                  type="primary"
                  style={{ marginTop:10}}
                  shape="circle"><DeleteOutlined
                 
                    onClick={() => {
                      setTodos(todos.filter((el) => el !== item));
                      localStorage.setItem(
                        "todos",
                        JSON.stringify(todos.filter((el) => el !== item))
                      );
                      
                    }}
                  />
                  </Button>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
