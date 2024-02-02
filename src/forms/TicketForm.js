import { useState } from "react";
import { createTicket } from "../services/ticketService";
import { useNavigate } from "react-router-dom";

import("./Form.css");
export const TicketForm = ({ currentUser }) => {
  const [ticket, setTicket] = useState({ description: "", emergency: false });

  const navigate = useNavigate();
  const handleSave = (e) => {
    e.preventDefault();

    if (ticket.description) {
      const newTicket = {
        userId: currentUser.id,
        description: ticket.description,
        emergency: ticket.emergency,
        dateCompleted: "",
      };
      createTicket(newTicket).then(() => {
        navigate("/tickets");
      });
    } else {
      window.alert("Please fill out description!");
    }
  };

  return (
    <form>
      <h2>New Service Ticket</h2>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Brief description of problem"
            onChange={(e) => {
              const ticketCopy = { ...ticket };
              ticketCopy.description = e.target.value;
              setTicket(ticketCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div
          className="form-group"
          on
          onChange={(e) => {
            const ticketCopy = { ...ticket };
            ticketCopy.emergency = e.target.checked;
            setTicket(ticketCopy);
          }}
        >
          <label>
            Emergency:
            <input type="checkbox" />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-info" onClick={handleSave}>
            Submit Ticket
          </button>
          {/* Default for forms is for page to refresh so navigate will not work 
          so we need to capture event and prevent default*/}
        </div>
      </fieldset>
    </form>
  );
};
