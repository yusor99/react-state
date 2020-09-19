import { Button, Row, Col, Input } from "antd";
import { FolderAddOutlined, DeleteOutlined } from "@ant-design/icons";
const TodoForm =(props)=>{
    return(
        <div className="form">
        <Row gutter={20}>
          <Col span={20}>
            <Input
              placeholder="write here"
              value={props.todo}
              onChange={(e)=>props.handelChange(e.target.value)}
            />
          </Col>
          <Col span={2}>
            <Button type="primary" 
            onClick={props.add}
             style={{ width: "100%" }}>
              Add <FolderAddOutlined />
            </Button>
          </Col>
          <Col span={2}>
          <Button
            style={{ width: "100%" }}
            type="primary"
            icon={<DeleteOutlined />}
            onClick={() => {
               props.setTodos([]);
             localStorage.setItem("todos", "");
            }}
            danger
          />
        </Col>
        </Row>
      </div>
    );
}
export default TodoForm;