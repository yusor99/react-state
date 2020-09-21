import { Row, Col,span } from 'antd';
import Item from '../com/item'
const Form=(props)=>{
return(
  <>
  <head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
  <Row gutter={16}>
    <Col span={24}><h1 className ="animate__animated  animate__swing" style={{textAlign:"center",margin:20}}>Welcome To Our Album</h1> </Col>
  </Row>
  <Row gutter={12}>
    <Col span={6}> <Item/> </Col>
    <Col span={6}> <Item   /> </Col>
    <Col span={6}> <Item   /> </Col>
    <Col span={6}> <Item    /> </Col>
  </Row>
  
</>
)
}
export default Form;