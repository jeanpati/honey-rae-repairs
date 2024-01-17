 import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])

  useEffect(() => { //the function is what we want to happen and the array is when we want it to happen
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
      console.log("tickets set!")
    })
  }, []) //ONLY runs on initial render of component (so we dont have an inifinite loop) when empty

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
        )
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets]) //will run whenever showEmergency changes



  return (
  <div className="tickets-container">
    <h2>Tickets</h2>
    <div>
      <button className="filter-btn btn-primary" 
      onClick={() => {
        setShowEmergencyOnly(true)
        }}>Emergency
        </button>
      <button className="filter-btn btn-info" 
      onClick={() => {
        setShowEmergencyOnly(false)
        }}>Show All
        </button>
    </div>
    <article className="tickets">
      {filteredTickets.map((ticketObj) => {
        return <Ticket ticket={ticketObj} name="Joe" key={ticketObj.id}/> //the name attribute will show up under props and can be access via ticket.js
      })}
    </article>
  </div>
  )
}