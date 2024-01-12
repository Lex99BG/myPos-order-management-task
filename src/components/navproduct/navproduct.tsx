import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Nav, Navbar as NavProduct } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/shopping-cart-context/shoppingcartcontext"
function NavigationProduct() {
    const { openCart, cartQuantity } = useShoppingCart()
  return (
          <NavProduct className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/motorcycles" as={NavLink}>Motorcycles</Nav.Link>
                    <Nav.Link to="/cars" as={NavLink}>Cars</Nav.Link>
                    <Nav.Link to="/trucks" as={NavLink}>Trucks</Nav.Link>
                    <Nav.Link to="/trailers" as={NavLink}>Trailers</Nav.Link>
                    <Nav.Link to="/checkout" as={NavLink}>Checkout</Nav.Link>
                    
                </Nav>

                {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-danger"
              className="rounded-circle"
            >
              <FontAwesomeIcon icon={faCartShopping} />

              <div
                className="rounded-circle bg-warning d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
               

            </Container>
          </NavProduct>
  );
}

export default NavigationProduct;
