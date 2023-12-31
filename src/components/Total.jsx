import Table from "react-bootstrap/Table";

const Total = ({ data }) => {
  const total = data
    .map((item) => +item.price * +item.dampingRate * +item.amount)
    .reduce((tot, num) => +tot + +num, 0);

  return (
    <div className="container">
      <Table hover className="border-bottom my-5">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${total.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Tax(18%)</td>
            <td>${(total * 0.18).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>$25.00</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>${total ? (total + total * 0.18 + 25).toFixed(2) : 0}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Total;
