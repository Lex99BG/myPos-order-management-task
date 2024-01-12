import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useShoppingCart } from "../../context/shopping-cart-context/shoppingcartcontext";
import NavigationProduct from "../../components/navproduct/navproduct";
import { CartItem } from "../../components/cart-items/cartitem";
import { formatCurrency } from "../../utilities/formatcurrency";
import storeItems from "../../data/store-items-merge";
 
const CheckoutPage: React.FC = () => {
  const { cartItems, clearCart } = useShoppingCart();
  const [formData, setFormData] = useState({
    name: "",
    telNumber: "",
    address: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("orderedProducts", JSON.stringify(cartItems));
    setFormData({
      name: "",
      telNumber: "",
      address: "",
      email: "",
    });    
    clearCart()
    alert("Order Completed");
  };

  return (
    <div className="container">
      <NavigationProduct />
      <Row>
        <Col>
          <Form id="testform"
            className="shadow p-2 rounded border"
            onSubmit={handleFormSubmit}
          >
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="telNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                required
                value={formData.telNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Address"
                required
                value={formData.address}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <br />
            <div className="ms-auto fw-bold fs-5">
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0),
              )}
            </div>
            <br />
            <Button variant="danger w-100 btn-lg shadow" type="submit">
              Proceed to Payment
            </Button>
          </Form>
        </Col>
        <Col>
        <Row className="flex-column">
            {cartItems.map((item: any, index: number) => (
              <Col className="shadow-sm border rounded my-1" key={index}>
                <CartItem id={item.id} quantity={item.quantity} name={""} type={""}>
                  {storeItems.map((storeItem: any) => {
                    if (storeItem.id === item.id) {
                      const displayKeys = [
                        "engineCapacity",
                        "color",
                        "numberOfDoors",
                        "carCategory",
                        "loadCapacity",
                        "numberOfAxles",
                        "numberOfBeds",
                      ];

                      return (
                        <div
                          className="text-muted"
                          style={{ fontSize: ".75rem" }}
                          key={storeItem.id}
                        >
                          <ul>
                            {displayKeys.map((key) =>
                              storeItem[key] ? (
                                <li key={key}>
                                  <strong>{key}:</strong> {storeItem[key]}
                                </li>
                              ) : null
                            )}
                          </ul>
                        </div>
                      );
                    }
                    return null;
                  })}
                </CartItem>
            </Col>
          ))}
          {cartItems.length === 0 && (
            <Col>
              <Card className="h-100 shadow border">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">Empty Cart</span>
                  </Card.Title>
                  <Card.Text>
                    <p>No items in the cart</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
