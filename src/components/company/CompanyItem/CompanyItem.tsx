import type { Company } from "../../../store/company/company.slice";
import css from "./CompanyItem.module.css";

type CompanyItemProps = {
  company: Company;
};

const CompanyItem: React.FC<CompanyItemProps> = ({ company }) => {
  const { id, address, employeeCount, name } = company;

  return (
    <div className={css.tableRow} key={id}>
      <div className={css.cell}>
        <input type="checkbox" name="company1" />
      </div>
      <div className={css.cell}>{name}</div>
      <div className={css.cell}>{employeeCount}</div>
      <div className={css.cell}>{address}</div>
    </div>
  );
};

export default CompanyItem;
