import { useAppSelector } from "../../../store";
import { CompanyItem } from "../CompanyItem";
import css from "./CompanyTable.module.css";

const CompanyTable: React.FC = () => {
  const companies = useAppSelector((state) => state.company.items);

  return (
    <div className={css.tableWrapper}>
      <h2 className={css.tableTitle}>Компании</h2>
      <div className={css.table}>
        <div className={css.tableHead}>
          <div>
            <input type="checkbox" name="allСompanies" id="allСompanies" />
            <label htmlFor="allСompanies">Выбрать все</label>
          </div>
          <button>Добавить</button>
        </div>
        <div className={css.tableBody}>
          {companies.map((company) => (
            <CompanyItem company={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyTable;
