import { useState } from "react";
import './Counter.scss'

const TicketCounter = () => {
  const [tickets, setTickets] = useState<number>(0);

  const handleTicketIncrement = () => {
    setTickets(tickets + 1)
  }

  const handleTicketDecrement = () => {
    if (tickets <= 0) {
      setTickets(0)
    } else {
      setTickets(tickets - 1)
    }
  }

  return (
    <div className="ticket-counter">
      <h2 className="ticket-counter__heading">Tickets</h2>
      <p className="ticket-counter__counter">{tickets}</p>
      <div className="ticket-amount">
        <p className="ticket-amount__decrease">-</p>
        <p className="ticket-amount__increase">+</p>
      </div>
    </div>
  )
}

export default TicketCounter