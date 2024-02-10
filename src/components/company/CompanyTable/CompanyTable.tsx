import { useState } from "react";
import { useAppSelector } from "../../../store";
import CompanyForm from "../CompanyForm/CompanyForm";
import { CompanyItem } from "../CompanyItem";
import css from "./CompanyTable.module.css";
import { checkSelectedAll } from "../../../store/company/company.selectors";
import { useDispatch } from "react-redux";
import { selectAllCompanies } from "../../../store/company/company.slice";

const CompanyTable: React.FC = () => {
  const { items: companies, selectedCompanies } = useAppSelector((state) => state.company);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const state = useAppSelector((state) => state);
  const isSelectedAll = checkSelectedAll(state);
  const dispatch = useDispatch();

  const onHandleAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsAddModalOpen(true);
  };

  const onHandleModalClose = () => {
    setIsAddModalOpen(false);
  };

  const onSelectAll = () => {
    dispatch(selectAllCompanies());
  };

  return (
    <>
      <div className={css.tableWrapper}>
        <h2 className={css.tableTitle}>Компании</h2>
        <div className={css.table}>
          <div className={css.tableHead}>
            <div>
              <input
                type="checkbox"
                name="allСompanies"
                id="allСompanies"
                checked={isSelectedAll}
                onChange={onSelectAll}
              />
              <label htmlFor="allСompanies">Выбрать все</label>
            </div>
            <button onClick={onHandleAdd}>Добавить</button>
          </div>
          <div className={css.tableBody}>
            {companies.map((company) => (
              <CompanyItem company={company} key={company.id} isSelected={selectedCompanies.includes(company.id)} />
            ))}
          </div>
        </div>
      </div>
      <CompanyForm isFormOpen={isAddModalOpen} closeForm={onHandleModalClose} />
    </>
  );
};

export default CompanyTable;
