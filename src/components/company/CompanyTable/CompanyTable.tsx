import { useState } from "react";
import { useAppSelector } from "../../../store";
import CompanyForm from "../CompanyForm/CompanyForm";
import { CompanyItem } from "../CompanyItem";
import css from "./CompanyTable.module.css";

const CompanyTable: React.FC = () => {
  const companies = useAppSelector((state) => state.company.items);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const onHandleAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsAddModalOpen(true);
  };

  const onHandleModalClose = () => {
    setIsAddModalOpen(false);
  };

  return (
    <>
      <div className={css.tableWrapper}>
        <h2 className={css.tableTitle}>Компании</h2>
        <div className={css.table}>
          <div className={css.tableHead}>
            <div>
              <input type="checkbox" name="allСompanies" id="allСompanies" />
              <label htmlFor="allСompanies">Выбрать все</label>
            </div>
            <button onClick={onHandleAdd}>Добавить</button>
          </div>
          <div className={css.tableBody}>
            {companies.map((company) => (
              <CompanyItem company={company} key={company.id} />
            ))}
          </div>
        </div>
      </div>
      <CompanyForm isFormOpen={isAddModalOpen} closeForm={onHandleModalClose} />
    </>
    
  );
};

export default CompanyTable;
