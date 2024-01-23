import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerByUserId } from "../../services/customerService";
import "./CustomersList.css";

export const CustomerDetails = () => {
  // /customer/3 the path
  // path="/customers/:customerId" the key is customerId the value is 3 above. We need a key value pair
  const [customer, setCustomer] = useState([]);
  const { customerId } = useParams(); // { customerId: 3}

  useEffect(() => {
    getCustomerByUserId(customerId).then((data) => {
      const customerObj = data[0];
      setCustomer(customerObj);
    });
  }, [customerId]);
  return (
    <section className="customer">
      <header className="customer-header">{customer.user?.fullName}</header>
      <div>
        <span className="customer-info">Email : </span>
        {customer.user?.email}
      </div>
      <div>
        <span className="customer-info">Address : </span>
        {customer.address}
      </div>
      <div>
        <span className="customer-info">Phone Number : </span>
        {customer.phoneNumber}
      </div>
    </section>
  );
};
