import React from "react";
import { clsx } from "clsx";
import { useAppDispatch } from "../../../store";
import css from "./Employee.module.css";
import { Employee, removeEmployee } from "../../../store/employee/employee.slice";

type EmployeeItemProps = {
  employee: Employee;
  isSelected: boolean;
};

const EmployeeItem: React.FC<EmployeeItemProps> = React.memo(({ employee, isSelected }) => {
  const { firstName, lastName, position, id } = employee;
  const dispatch = useAppDispatch();

  const onHandleRemove: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(removeEmployee(id));
  };

  return (
    <div className={clsx(css.tableRow, { [css.selectedTableRow]: isSelected })}>
      <div className={css.cell}>
        <input type="checkbox" name="company1" />
      </div>
      <div className={css.cell}>{firstName}</div>
      <div className={css.cell}>{lastName}</div>
      <div className={css.cell}>{position}</div>
      <div className={css.cell}>
        <button onClick={onHandleRemove}>R</button>
      </div>
    </div>
  );
});

export default EmployeeItem;
