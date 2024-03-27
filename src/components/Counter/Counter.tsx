
import './Counter.scss'

type TicketCounter = {
  tickets: number;
  handleTicketIncrement: () => void;
  handleTicketDecrement: () => void;
};

const TicketCounter = ({tickets, handleTicketIncrement, handleTicketDecrement}: TicketCounter) => {
  
  const ticketColor = {
    color: tickets >= 10 ? 'red' : 'black',
  };

  return (
    <div className="ticket-counter">
      <h2 className="ticket-counter__heading">Tickets</h2>
      <p className="ticket-counter__counter" style={ticketColor}>{tickets}</p>
      <div className="ticket-amount">
        <p className="ticket-amount__decrease" onClick={handleTicketDecrement}>-</p>
        <p className="ticket-amount__increase" onClick={handleTicketIncrement}>+</p>
      </div>
    </div>
  )
}

export default TicketCounter