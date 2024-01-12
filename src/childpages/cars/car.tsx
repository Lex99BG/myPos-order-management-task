import { Col, Row } from "react-bootstrap";
import NavigationProduct from "../../components/navproduct/navproduct";
import { StoreItem } from "../../components/storeitem/storeitem";
import storeItems from "../../data/cars.json";

function CarsPage() {
  return (
    <div className="container">
      <NavigationProduct/>
      <Row lg={3} md={2} xs={1} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem 
              id={item.id}
              type={"Car"} 
              attributes={{
                name: item.name,
                model: item.model,
                engineCapacity: item.engineCapacity,
                color: item.color,
                numberOfDoors: item.numberOfDoors,
                carCategory: item.carCategory
              }} 
              price={item.price} 
              imgUrl={item.imgUrl} 
            />
          </Col>    
        ))}
      </Row>
    </div>
  );
}

export default CarsPage;
