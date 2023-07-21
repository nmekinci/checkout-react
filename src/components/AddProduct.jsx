import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AddProduct = ({ hideShow, setMainData, mainData }) => {
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    image: "",
    price: "",
    dampingRate: 0.8,
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setMainData([...mainData, newItem]);

    console.log(newItem);
    setNewItem({
      id: "",
      name: "",
      image: "",
      price: "",
      dampingRate: 0.8,
      amount: "",
    });
  };
  const handleChange = (e) => {
    setNewItem({ ...newItem, id: uuidv4(), [e.target.id]: e.target.value });
  };

  return (
    <Row xs={2} md={2} lg={2} xl={3} className=" mt-3g-4">
      <Col className="container">
        <Form
          className={hideShow ? "my-3" : "my-3 d-none"}
          onSubmit={handleSubmit}
        >
          <Form.Label htmlFor="name">Product Name</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="name"
              value={newItem.name}
              onChange={handleChange}
              aria-describedby="basic-addon3"
            />
          </InputGroup>
          <Form.Label htmlFor="price">Product Price</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="price"
              type="number"
              min="1"
              value={newItem.price}
              onChange={handleChange}
              aria-describedby="basic-addon3"
            />
          </InputGroup>
          <Form.Label htmlFor="amount">Product Quantity</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="amount"
              type="number"
              min="1"
              value={newItem.amount}
              onChange={handleChange}
              aria-describedby="basic-addon3"
            />
          </InputGroup>
          <Form.Label htmlFor="image">Product Image</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="image">
              https://example.com/users/
            </InputGroup.Text>
            <Form.Control
              id="image"
              value={newItem.image}
              onChange={handleChange}
              aria-describedby="basic-addon3"
            />
          </InputGroup>
          <Button variant="success" type="submit">
            Add To List
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddProduct;
