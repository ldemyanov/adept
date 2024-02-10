import { useAppSelector } from "../../../store";
import EmployeeItem from "../EmployeeItem/EmployeeItem";
import css from "./EmployeeTable.module.css";

const EmployeeTable: React.FC = () => {
  const employees = useAppSelector((state) => state.employee.items.slice(0, 15));

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
          {employees.map((employee) => (
            <EmployeeItem employee={employee}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
