import { useState } from "react";
import { useAppSelector } from "../../../store";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import EmployeeItem from "../EmployeeItem/EmployeeItem";
import css from "./EmployeeTable.module.css";
import { selectCompanyEmployees } from "../../../store/employee/employee.selector";

const EmployeeTable: React.FC = () => {
  const state = useAppSelector((state) => state);
  const employees = selectCompanyEmployees(state);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const onHandleAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsAddModalOpen(true);
  };

  const onHandleModalClose = () => {
    setIsAddModalOpen(false);
  };

  const isExistEmploees = employees && employees.length > 0;

  return (
    <>
      <div className={css.tableWrapper}>
        <h2 className={css.tableTitle}>Сотрудники</h2>
        <div className={css.table}>
          <div className={css.tableHead}>
            <div>
              <input type="checkbox" name="allEmployees" id="allEmployees" />
              <label htmlFor="allEmployees">Выбрать все</label>
            </div>
            <button onClick={onHandleAdd}>Добавить</button>
          </div>
          <div className={css.tableBody}>
            {isExistEmploees && employees.map((employee) => <EmployeeItem employee={employee} key={employee.id} />)}
          </div>
        </div>
      </div>
      <EmployeeForm closeForm={onHandleModalClose} isFormOpen={isAddModalOpen} />
    </>
  );
};

export default EmployeeTable;
