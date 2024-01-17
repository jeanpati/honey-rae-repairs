import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"

export const Ticket = ({ ticket }) => { // ticket is the props object, we destructured it to pull out the ticket key
    const [employees,setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})
    
    useEffect(() => { //the function is what we want to happen and the array is when we want it to happen
        getAllEmployees().then((employeesArray) => {
          setEmployees(employeesArray)
          console.log("employees set!")
        })
      }, []) 

      useEffect(() => {
        const foundEmployee = employees.find(
            (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
            )
        setAssignedEmployee(foundEmployee)
      }, [employees, ticket])

    return (//optional chaining operator - only use when something may be undefined and its expected, not just to fix issue
        <section className="ticket" >
        <header className="ticket-info">#{ticket.id}</header>
        <div>{ticket.description}</div>
        <footer>
            <div>
            <div className="ticket-info">Assignee</div>
            <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div> 
            </div>
          <div>
            <div className="ticket-into">Emergency</div>
            <div>{ticket.emergency ? "yes" : "no"}</div>
          </div>
        </footer>
        </section>
      )
}