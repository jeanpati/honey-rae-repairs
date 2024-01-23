import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { CustomersList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeeList";
import { TicketList } from "./components/tickets/TicketList";
import { NavBar } from "./components/nav/NavBar";
import { Welcome } from "./components/welcome/Welcome";
import { CustomerDetails } from "./components/customers/CustomerDetails";
import { EmployeeDetails } from "./components/employees/EmployeeDetails";

export const App = () => {
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
          <Route path="tickets" element={<TicketList />} />
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
        </Route>
      </Routes>
    </>
  );
};
