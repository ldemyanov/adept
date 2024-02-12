import css from "./App.module.css";
import { CompanyTable } from "../company/CompanyTable";
import { EmployeeTable } from "../employee/EmployeeTable";
import { useAppSelector } from "../../store";

const App: React.FC = () => {
  const selectedCompanies = useAppSelector((state) => state.company.selectedCompanies);

  return (
    <div className={css.wrapper}>
      <CompanyTable />
      {selectedCompanies.length > 0 && <EmployeeTable />}
    </div>
  );
};

export default App;
