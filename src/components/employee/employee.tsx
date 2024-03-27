import { useState } from "react";
import TicketCounter from "../Counter/Counter";
import "./Employee.scss";

type Employees = {
  id: number;
  name: string;
  role: string;
  tickets: number;
  searchedEmployee: { id: number; name: string; role: string; tickets: number }[];
}

const EmployeeTiles = ({ id, name, role, tickets, searchedEmployee }: Employees) => {
  const [ticket, setTickets] = useState<number>(tickets);

  const handleTicketIncrement = () => {
    setTickets(ticket + 1);
    
  };

  const handleTicketDecrement = () => {
    if (ticket <= 0) {
      setTickets(0);
    } else {
      setTickets(ticket - 1);
    }
  };
  const employeeName = name;
  const employeeRole = role;

  const employeeById = searchedEmployee.find(employee => employee.id === id)
  
  if(employeeById){
    employeeById.tickets = ticket
  } else {
    throw new Error("Could not match the ID")
  }
  
  return (
    <div className="employee">
      <p className="employee__data employee__data--name">{employeeName}</p>
      <p className="employee__data employee__data--role">{employeeRole}</p>
      <div className="employee__counter">
        <TicketCounter tickets={ticket} handleTicketDecrement={handleTicketDecrement} handleTicketIncrement={handleTicketIncrement} />
      </div>
    </div>
  );
}

export default EmployeeTiles

