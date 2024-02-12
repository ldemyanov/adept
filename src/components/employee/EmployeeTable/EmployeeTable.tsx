import { useCallback, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../store";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import EmployeeItem from "../EmployeeItem/EmployeeItem";
import css from "./EmployeeTable.module.css";
import {
  checkEmployeesSelectedAll,
  getDisplayedEmployees,
  checkScrollFinish,
} from "../../../store/employee/employee.selector";
import { useDispatch } from "react-redux";
import { increaseСountShowedItems, selectAllEmployees } from "../../../store/employee/employee.slice";

const EmployeeTable: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const refTableBody = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const state = useAppSelector((state) => state);
  const isSelectedAll = checkEmployeesSelectedAll(state);
  const isScrollFinish = checkScrollFinish(state);
  const employees = getDisplayedEmployees(state);

  const onHandleAdd = () => setIsAddModalOpen(true);

  const onHandleModalClose = () => setIsAddModalOpen(false);

  const onSelectAll = () => dispatch(selectAllEmployees());

  const onScroll = useCallback(() => {
    const block = refTableBody.current;
    if (!block) return;

    const currentScrollPosition = block.scrollTop + block.clientHeight;
    const triggerScrollPosition = block.scrollHeight - block.scrollTop / 4;

    if (currentScrollPosition >= triggerScrollPosition && !isScrollFinish) {
      dispatch(increaseСountShowedItems());
    }
  }, [dispatch, isScrollFinish]);

  useEffect(() => {
    const block = refTableBody.current;
    if (!block) return;

    block.removeEventListener("scroll", onScroll);
    block.addEventListener("scroll", onScroll);

    return () => block.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const isExistEmploees = employees && employees.length > 0;

  return (
    <>
      <div className={css.tableWrapper}>
        <h2 className={css.tableTitle}>Сотрудники</h2>
        <div className={css.table}>
          <div className={css.tableHead}>
            <div>
              <input
                type="checkbox"
                name="allEmployees"
                id="allEmployees"
                checked={isSelectedAll}
                onChange={onSelectAll}
              />
              <label htmlFor="allEmployees">Выбрать все</label>
            </div>
            <button onClick={onHandleAdd}>Добавить</button>
          </div>
          <div ref={refTableBody} className={css.tableBody}>
            {isExistEmploees && employees.map((employee) => <EmployeeItem employee={employee} key={employee.id} />)}
          </div>
        </div>
      </div>
      <EmployeeForm closeForm={onHandleModalClose} isFormOpen={isAddModalOpen} />
    </>
  );
};

export default EmployeeTable;
