import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Products = ({ data, setMainData }) => {
  // const {id, name, image, price, dampingRate, amount} = data
  const itemPlus = (item) => {
    setMainData(data.map( (i) => i.id === item.id ? {...i, amount : i.amount + 1} : i ));
  }
  const itemMinus = (item) => {
    setMainData(data.map( (i) => i.id === item.id && item.amount > 1 ? {...i, amount : i.amount - 1} : i ));
  }
  const itemDelete = (item) => {
    setMainData(data.filter( (i) => i.id !== item.id))
  }
  return (
    <>
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {data.map((item) => (
        <Col key={item.id}>
        <Card  style={{ width: "18rem" }} className=" mt-4 m-auto">
          <Card.Img variant="top" src={item.image} style={{ height: "18rem" }}/>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text> {( +(item.price) * +(item.dampingRate) ).toFixed(2)} {item.price}</Card.Text>

            <div className="d-flex border p-2 justify-content-around align-items-baseline">
              <Button className="" variant="secondary" onClick={() => itemMinus(item)}>-</Button>
              <Card.Text className=""   >{item.amount}</Card.Text>
              <Button variant="secondary" onClick={() => itemPlus(item)}>+</Button>
            </div>
            <Button className="my-3" variant="danger" onClick={() => itemDelete(item)}>Remove</Button>
            <Card.Text>Product Total: ${( +(item.price) * +(item.dampingRate)  * item.amount).toFixed(2)}</Card.Text>
          </Card.Body>
        </Card>
        </Col>
      ))}
      </Row>
    </>
  );
};

export default Products;
