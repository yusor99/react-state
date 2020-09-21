import { Card } from "antd";
const { Meta } = Card;
const C = (props) => {
  return (
    <div className="image-list">
      {
        <Card
        
          key={props.index}
          hoverable
          cover={
          <img src={props.item.download_url}  />}
          style={{marginBottom:20 }}
        >
           
          <Meta title= {'#'+props.item.id} description={props.item.author} />
          <a href={props.item.download_url}/>
        </Card>
      }
    
    </div>
  );
};
export default C;
