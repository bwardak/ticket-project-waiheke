
import TicketCounter from "../Counter/Counter";
import "./Employee.scss";

type Employees = {
  name: string;
  role: string;
}

const EmployeeTiles = ({ name, role }: Employees) => {
  const employeeName = name;
  const employeeRole = role;

  return (
    <div className="employee">
      <p className="employee__data employee__data--name">{employeeName}</p>
      <p className="employee__data employee__data--role">{employeeRole}</p>
      <div className="employee__counter">
        <TicketCounter />
      </div>
    </div>
  );
}

export default EmployeeTiles