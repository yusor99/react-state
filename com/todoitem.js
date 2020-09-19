import { Button, Row, Col, Input } from "antd";
import { FolderAddOutlined, DeleteOutlined } from "@ant-design/icons";
const TodoItem =(props)=>{
return(
<div className="list-item" >
              <Row gutter={20}>
                <Col span={21}>
                  <p>{props.item}</p>
                </Col>
                <Col span={3}>
                  <Button  danger
                  type="primary"
                  style={{ marginTop:10}}
                  shape="circle"><DeleteOutlined
                 
                    onClick={() => {
                      props.setTodos(props.todos.filter((el) => el !== props.item));
                      localStorage.setItem(
                        "todos",
                        JSON.stringify(props.todos.filter((el) => el !== props.item))
                      );
                      
                    }}
                  />
                  </Button>
                </Col>
              </Row>
            </div>
);
}
export default TodoItem;