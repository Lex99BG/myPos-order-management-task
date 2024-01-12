import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../context/shopping-cart-context/shoppingcartcontext"
import { formatCurrency } from "../../utilities/formatcurrency"
import { CartItem } from "../cart-items/cartitem"
import storeItems from "../../data/cars.json"
import bikeItems from "../../data/bikes.json"
import truckItems from "../../data/bikes.json"
import trailerItems from "../../data/trailers.json"
import { Link } from "react-router-dom"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  const allItems = [...storeItems, ...bikeItems, ...truckItems, ...trailerItems]
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end" >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>

        <Link to="/checkout" className="text-body-secondary">
          Checkout
        </Link>

          {cartItems.map(item => (
            <CartItem type={""} name={""} key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = allItems.find(i => i.id === cartItem.id) 
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
             
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}