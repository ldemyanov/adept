import { useAppDispatch } from "../../../store";
import { Employee, removeEmployee } from "../../../store/employee/employee.slice";
import css from "./Employee.module.css";

type EmployeeItemProps = {
  employee: Employee;
};

const EmployeeItem: React.FC<EmployeeItemProps> = ({ employee }) => {
  const { firstName, secondName, position, id } = employee;
  const dispatch = useAppDispatch();

  const onHandleRemove: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(removeEmployee(id));
  };

  return (
    <div className={css.tableRow} key={id}>
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
};

export default EmployeeItem;
