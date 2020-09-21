import { Spin } from "antd";
const Load = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
      }}
    >
      <Spin tip="Loading..."></Spin>
    </div>
  );
};
export default Load;
