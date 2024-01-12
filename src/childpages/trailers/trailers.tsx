import { Col, Row } from "react-bootstrap";
import NavigationProduct from "../../components/navproduct/navproduct";
import { StoreItem } from "../../components/storeitem/storeitem";
import trailerItems from "../../data/trailers.json";

function TrailersPage() {
  return (
    <div className="container">
      <NavigationProduct/>
      <Row lg={3} md={2} xs={1} className="g-3">
        {trailerItems.map(item => (
          <Col key={item.id}>
            <StoreItem 
              id={item.id}
              type={"Trailer"} 
              attributes={{
                name: item.name,
                model: item.model,
                loadCapacity: item.loadCapacity,
                numberOfAxles: item.numberOfAxles
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

export default TrailersPage;
