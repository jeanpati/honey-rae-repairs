import { useEffect, useState } from "react";
import { User } from "../../users/User";
import { getStaffUsers } from "../../services/userService";
import { Link } from "react-router-dom";
import("./EmployeeList.css");

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return (
          <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
            <User user={employeeObj} />
          </Link>
        );
      })}
    </div>
  );
};
