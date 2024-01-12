// Merge all item types into a single array
import bikeItems from "../data/bikes.json";
import carItems from "../data/cars.json";
import truckItems from "../data/trucks.json";
import trailerItems from "../data/trailers.json";

const storeItems = [
  ...bikeItems.map(item => ({ ...item, type: 'Motorcycle' })),
  ...carItems.map(item => ({ ...item, type: 'Car' })),
  ...truckItems.map(item => ({ ...item, type: 'Truck' })),
  ...trailerItems.map(item => ({ ...item, type: 'Trailer' })),
];

export default storeItems;
