import React from "react";
import { useAppDispatch } from "../../../store";
import { Employee, removeEmployee } from "../../../store/company/company.slice";
import css from "./Employee.module.css";

type EmployeeItemProps = {
  employee: Employee;
};

const EmployeeItem: React.FC<EmployeeItemProps> = React.memo(({ employee }) => {
  const { firstName, secondName, position, id } = employee;
  const dispatch = useAppDispatch();

  const onHandleRemove: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log(":: onHandleRemove id::", id);
    dispatch(removeEmployee(id));
  };

  console.log(" render EmployeeItem id", id);

  return (
    <div className={css.tableRow}>
      <div className={css.cell}>
        <input type="checkbox" name="company1" />
      </div>
      <div className={css.cell}>{firstName}</div>
      <div className={css.cell}>{secondName}</div>
      <div className={css.cell}>{position}</div>
      <div className={css.cell}>
        <button onClick={onHandleRemove}>R</button>
      </div>
    </div>
  );
});

export default EmployeeItem;
