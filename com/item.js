import { Card } from "antd";
import { useEffect, useState } from "react";
import C from "../com/card";
import Loading from "../com/load";
const Item = () => {
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
    <div className="card">
      {loading ? (
        <Loading load={(loading, setLoading)} />
      ) : (
        <div className="image-list">
          {data.map((item, index) => (
            <a href={item.download_url}>
             
              <C item={item} index={index}  key={index}/>
            </a>
          ))}
        </div>
      )}
      ;
    </div>
  );
};
export default Item;
