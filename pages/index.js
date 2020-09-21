import Item from "../com/item";
import Load from "../com/load";
import AniTitle from "../com/aniTitle";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((resp) => resp.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <AniTitle />
      {loading ? (
        <Load />
      ) : (
        <Row gutter={[20, 20]}>
          {data.map((item) => (
            <Col key={item.id} xs={24} sm={8} md={6}>
              <Item item={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
export default Home;
