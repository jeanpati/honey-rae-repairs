import { useEffect, useState } from "react";
import { User } from "../../users/User";
import { getStaffUsers } from "../../services/userService";
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
        return <User user={employeeObj} employeeObj={employeeObj.id} />;
      })}
    </div>
  );
};
