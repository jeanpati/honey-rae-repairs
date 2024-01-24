import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { TicketList } from "../components/tickets/TicketList";
import { CustomersList } from "../components/customers/CustomersList";
import { CustomerDetails } from "../components/customers/CustomerDetails";
import { EmployeeList } from "../components/employees/EmployeeList";
import { EmployeeDetails } from "../components/employees/EmployeeDetails";
import { useEffect, useState } from "react";
import { EmployeeForm } from "../forms/EmployeeForm";
export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObject);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<Welcome />} />
          <Route
            path="tickets"
            element={<TicketList currentUser={currentUser} />}
          />
          <Route path="customers">
            <Route index element={<CustomersList />} />
            <Route path=":customerId" element={<CustomerDetails />} />{" "}
            {/* /customers/:customerId whenever the path of our app matches this 
    it will take whatever is after customers and store it on an object. 
    We access it via useParams hook in CustomerDetails. the key being returned will be the customerId above which is line 7 in params of CustDetails*/}
          </Route>
          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />{" "}
          </Route>
          <Route
            path="profile"
            element={<EmployeeForm currentUser={currentUser} />}
          />
        </Route>
      </Routes>
    </>
  );
};
