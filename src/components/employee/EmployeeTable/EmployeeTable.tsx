import { useAppSelector } from "../../../store";
import { selectCompanyEmployees } from "../../../store/company/company.selectors";
import EmployeeItem from "../EmployeeItem/EmployeeItem";
import css from "./EmployeeTable.module.css";

const EmployeeTable: React.FC = () => {
  const state = useAppSelector((state) => state);
  const employees = selectCompanyEmployees(state);

  const checkEmploees = employees && employees.length > 0;

  return (
    <div className={css.tableWrapper}>
      <h2 className={css.tableTitle}>Сотрудники</h2>
      <div className={css.table}>
        <div className={css.tableHead}>
          <div>
            <input type="checkbox" name="allEmployees" id="allEmployees" />
            <label htmlFor="allEmployees">Выбрать все</label>
          </div>
          <button>Добавить</button>
        </div>
        <div className={css.tableBody}>
          {checkEmploees && employees.map((employee) => <EmployeeItem employee={employee} />)}
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
