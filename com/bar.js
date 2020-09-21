
import { useState, useEffect } from "react";
import { Card, Spin } from "antd";
const { Meta } = Card;

const Bar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Spin />
            <p>Loading</p>
          </div>
        </div>
      ) : (
        <div className="image-list">
          {data.map((item , index) => (
            <Card
              key={index}
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title={item.title} description={item.artist} />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
export default Bar;
