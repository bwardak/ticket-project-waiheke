// import { useState } from 'react'
import './app.scss'
import EmployeeTiles from './components/Employee/employee';
import team from './data/team'
import SearchBox from './components/SearchBox/SearchBox';
import { FormEvent, useState } from 'react';

function App() {
  const heading = "Ticket Tracker"
  const [searchTerm, setSearchTerm] = useState<string>("")
  console.log(searchTerm);
  

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const newInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(newInput)
  }

  const searchedEmployee = team.filter((employee) => 
    employee.name.toLowerCase().includes(searchTerm)
  )

  console.log(team[0].name.toLowerCase());
  console.log(searchedEmployee);
  
  

  return (
    <div className="tracker-container">
      <h1 className="tracker-container__heading">{heading}</h1>
      <div className='tickets-container'>
        <div className="search-box-container">
          <SearchBox
            label="Employee:"
            handleInput={handleInput}
            searchTerm={searchTerm}
          />
        </div>
        <div className="employee-tiles-container">
          <div className="employees-container">
            {searchedEmployee.map((member) => (
              <EmployeeTiles
                key={member.id}
                id={member.id}
                name={member.name}
                role={member.role}
                tickets={member.tickets}
                searchedEmployee={searchedEmployee}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
