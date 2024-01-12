// OrdersList.tsx
import React, { useEffect, useState } from "react";
import { CartItem } from "../../components/cart-items/cartitem";
import './orderslist.css'
const OrdersList: React.FC = () => {
  const [formData, setFormData] = useState<any>(null);
  const [orderedProducts, setOrderedProducts] = useState<any[]>([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    const storedOrderedProducts = localStorage.getItem("orderedProducts");

    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }

    if (storedOrderedProducts) {
      setOrderedProducts(JSON.parse(storedOrderedProducts));
    }
  }, []);

  return (
    <div className="container">
        <div className="row py-3">
            <div className="col-md-6">
            <h2>Submitted Form Data:</h2>
            {formData && (
                <ul className="list-style">
                <li><span>Name:</span> <strong>{formData.name}</strong></li>
                <li><span>Phone Number:</span> <strong>{formData.telNumber}</strong></li>
                <li><span>Address:</span> <strong>{formData.address}</strong></li>
                <li><span>Email:</span> <strong>{formData.email}</strong></li>
                </ul>
            )}
            </div>
            <div className="col-md-6">
            <h2>Ordered Products:</h2>
            {orderedProducts.length > 0 ? (
                <ul>
                {orderedProducts.map((product) => (
                    <CartItem id={product.id} quantity={product.quantity} name={""} type={"order"}></CartItem>
                ))}
                </ul>
                ) : (
                <p>No products ordered yet.</p>
            )}
            </div>
        </div>
     

      
    </div>
  );
};

export default OrdersList;
