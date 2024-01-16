 import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"

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
      {filteredTickets.map((ticket) => {
        return (
          <section className="ticket" key={ticket.id}>
          <header className="ticket-info">#{ticket.id}</header>
          <div>{ticket.description}</div>
          <footer>
            <div>
              <div className="ticket-into">Emergency</div>
              <div>{ticket.emergency ? "yes" : "no"}</div>
            </div>
          </footer>
          </section>
        )
      })}
    </article>
  </div>
  )
}