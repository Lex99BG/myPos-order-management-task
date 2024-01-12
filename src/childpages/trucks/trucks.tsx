import { Col, Row } from "react-bootstrap";
import NavigationProduct from "../../components/navproduct/navproduct";
import { StoreItem } from "../../components/storeitem/storeitem";
import truckItems from "../../data/trucks.json";

function TrucksPage() {
  return (
    <div className="container">
      <NavigationProduct/>
      <Row lg={3} md={2} xs={1} className="g-3">
        {truckItems.map(item => (
          <Col key={item.id}>
            <StoreItem 
              id={item.id} // Include the ID property here
              type={"Truck"} 
              attributes={{
                name: item.name,
                model: item.model,
                engineCapacity: item.engineCapacity,
                color: item.color,
                numberOfBeds: item.numberOfBeds
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

export default TrucksPage;
