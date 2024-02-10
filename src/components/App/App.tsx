import css from "./App.module.css";
import { CompanyTable } from "../company/CompanyTable";
import { EmployeeTable } from "../employee/EmployeeTable";

const App: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <CompanyTable />
      <EmployeeTable />
    </div>
  );
};

export default App;
