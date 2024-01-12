import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../../context/shopping-cart-context/shoppingcartcontext"
import { formatCurrency } from "../../utilities/formatcurrency"

type MotorcycleProps = {
  name: string
  model: string
  engineCapacity: string
  color: string
}

type CarProps = {
  name: string
  model: string
  engineCapacity: string
  color: string
  numberOfDoors: string
  carCategory: string
}

type TruckProps = {
  name: string
  model: string
  engineCapacity: string
  color: string
  numberOfBeds: number
}

type TrailerProps = {
  name: string
  model: string
  loadCapacity: string
  numberOfAxles: number
}

export type StoreItemProps = {
  id: number
  type: 'Motorcycle' | 'Car' | 'Truck' | 'Trailer'
  attributes: MotorcycleProps | CarProps | TruckProps | TrailerProps
  price: number
  imgUrl: string
}

export function StoreItem({ id, type, attributes, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{attributes.name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text>
        <ul>
            {type === 'Motorcycle' && (
              <>
                <li>Model: <strong>{(attributes as MotorcycleProps).model}</strong></li>
                <li>Engine capacity: <strong>{(attributes as MotorcycleProps).engineCapacity}</strong></li>
                <li>Colour: <strong>{(attributes as MotorcycleProps).color}</strong></li>
              </>
            )}
            {type === 'Car' && (
              <>
                <li>Model: <strong>{(attributes as CarProps).model}</strong></li>
                <li>Engine capacity: <strong>{(attributes as CarProps).engineCapacity}</strong></li>
                <li>Colour: <strong>{(attributes as CarProps).color}</strong></li>
                <li>Number Of Doors: <strong>{(attributes as CarProps).numberOfDoors}</strong></li>
                <li>Car Category: <strong>{(attributes as CarProps).carCategory}</strong></li>
              </>
            )}
            {type === 'Truck' && (
              <>
                <li>Model: <strong>{(attributes as TruckProps).model}</strong></li>
                <li>Engine capacity: <strong>{(attributes as TruckProps).engineCapacity}</strong></li>
                <li>Colour: <strong>{(attributes as TruckProps).color}</strong></li>
                <li>Number Of Beds: <strong>{(attributes as TruckProps).numberOfBeds}</strong></li>
              </>
            )}
            {type === 'Trailer' && (
              <>
                <li>Model: <strong>{(attributes as TrailerProps).model}</strong></li>
                <li>Load capacity: <strong>{(attributes as TrailerProps).loadCapacity}</strong></li>
                <li>Number of axles: <strong>{(attributes as TrailerProps).numberOfAxles}</strong></li>
              </>
            )}
          </ul>
        </Card.Text>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" variant="outline-danger" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <Button
            onClick={() => removeFromCart(id)}
            variant="danger"
            className="w-100"
          >
            Remove
          </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}