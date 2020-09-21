import { Card } from "antd";
const { Meta } = Card;

const Item = (props) => {
  return (
    <a href={props.item.download_url}>
      <Card
        hoverable
        cover={<img style={{height: 160, objectFit: 'cover'}} src={props.item.download_url} />}
        
      >
        <Meta title={"#" + props.item.id} description={props.item.author} />
        <a href={props.item.download_url} />
      </Card>
    </a>
  );
};
export default Item;
