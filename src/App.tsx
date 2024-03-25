// import { useState } from 'react'
import './app.scss'
import TicketCounter from './components/Counter/Counter';
import EmployeeTiles from './components/Employee/employee';
import team from './data/team'

function App() {
  const heading = "Ticket Tracker"

  return (
    <div className="tracker-container">
      <h1 className="tracker-container__heading">{heading}</h1>
      <div className="employees-container">
        {team.map((member) => (
          <EmployeeTiles 
          key={member.id}
          name={member.name}
          role={member.role}
          />
        ))}
      </div>
    </div>
  );
}

export default App
