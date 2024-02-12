import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../store";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import EmployeeItem from "../EmployeeItem/EmployeeItem";
import css from "./EmployeeTable.module.css";
import { checkEmployeesSelectedAll, selectCompanyEmployees } from "../../../store/employee/employee.selector";
import { useDispatch } from "react-redux";
import {
  // getNextPage,
  selectAllEmployees,
} from "../../../store/employee/employee.slice";

const EmployeeTable: React.FC = () => {
  const refTableBody = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const state = useAppSelector((state) => state);
  const employees = selectCompanyEmployees(state);
  const isSelectedAll = checkEmployeesSelectedAll(state);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const onHandleAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsAddModalOpen(true);
  };

  const onHandleModalClose = () => {
    setIsAddModalOpen(false);
  };

  const onSelectAll = () => {
    dispatch(selectAllEmployees());
  };

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
  //       dispatch(getNextPage())
  //     }
  //   }

  //   window.addEventListener('scroll', onScroll, false);

  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [dispatch])

  useEffect(() => {
    const block = refTableBody.current;
    if (block) {
      block.addEventListener("scroll", () => {
        // block.scrollHeight = block.clientHeight + block.scrollTop

        console.log(block.clientHeight, block.scrollHeight, block.scrollTop);
      });
    }

    // return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            {isExistEmploees &&
              employees.map((employee) => (
                <EmployeeItem
                  employee={employee}
                  key={employee.id}
                  // isSelected={selectedEmployees.includes(employee.id)}
                />
              ))}
          </div>
        </div>
      </div>
      <EmployeeForm closeForm={onHandleModalClose} isFormOpen={isAddModalOpen} />
    </>
  );
};

export default EmployeeTable;
