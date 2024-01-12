import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../context/shopping-cart-context/shoppingcartcontext"
import storeItems from "../../data/cars.json"
import bikeItems from "../../data/bikes.json"
import truckItems from "../../data/trucks.json"
import trailerItems from "../../data/trailers.json"
import { formatCurrency } from "../../utilities/formatcurrency"
import { ReactNode } from "react"

type CartItemProps = {
  id: number;
  name: string;
  quantity: number;
  type: string;
  children?: ReactNode;
}

export function CartItem({ id, children, type }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const allItems = [...storeItems, ...bikeItems, ...truckItems, ...trailerItems]
  const item = allItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center py-2">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div className="text-danger">
          {item.name}
        </div>
       
        <div className="text-muted h3" style={{ fontSize: ".75rem" }}>
          {item.model}
        </div>

        {children}
      </div>
      <div> {formatCurrency(item.price)}</div>
      {
        (type !== 'order' && <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>)
      }
    </Stack>
  )
}