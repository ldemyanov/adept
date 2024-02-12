import React from "react";
import { clsx } from "clsx";
import { useAppDispatch, useAppSelector } from "../../../store";
import css from "./Employee.module.css";
import Field from "../../ui/Field/Field";
import {
  Employee,
  removeEmployee,
  changeFirstName,
  changeLastNameName,
  changePosition,
  selectEmployee,
} from "../../../store/employee/employee.slice";
import { changeEmployeeCount } from "../../../store/company/company.slice";

type EmployeeItemProps = {
  employee: Employee;
};

const EmployeeItem: React.FC<EmployeeItemProps> = React.memo(({ employee }) => {
  const { firstName, lastName, position, id } = employee;
  const { selectedEmployees } = useAppSelector((state) => state.employee);
  const isSelected = selectedEmployees.includes(employee.id);
  const dispatch = useAppDispatch();

  const onHandleRemove: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(changeEmployeeCount({ id, increment: -1 }));
    dispatch(removeEmployee(id));
  };

  const handleSelectEmployee = () => {
    dispatch(selectEmployee(id));
  };

  const acceptChangeFirstName = (newValue: string) => {
    dispatch(changeFirstName({ firstName: newValue, id: id }));
  };

  const acceptChangeLastName = (newValue: string) => {
    dispatch(changeLastNameName({ lastName: newValue, id: id }));
  };

  const acceptChangePosition = (newValue: string) => {
    dispatch(changePosition({ position: newValue, id: id }));
  };

  return (
    <div className={clsx(css.tableRow, { [css.selectedTableRow]: isSelected })}>
      <div className={css.cell}>
        <input type="checkbox" name="company1" checked={isSelected} onChange={handleSelectEmployee} />
      </div>
      <Field acceptChange={acceptChangeFirstName} value={firstName} />
      <Field acceptChange={acceptChangeLastName} value={lastName} />
      <Field acceptChange={acceptChangePosition} value={position} />
      <div className={css.cell}>
        <button onClick={onHandleRemove}>R</button>
      </div>
    </div>
  );
});

export default EmployeeItem;
