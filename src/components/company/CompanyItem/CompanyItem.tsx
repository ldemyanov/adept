import { useAppDispatch } from "../../../store";
import { selectCompany, type Company } from "../../../store/company/company.slice";
import css from "./CompanyItem.module.css";

type CompanyItemProps = {
  company: Company;
  isSelected?: boolean;
};

const CompanyItem: React.FC<CompanyItemProps> = ({ company, isSelected = false }) => {
  const { id, address, employeeCount, name } = company;
  const dispatch = useAppDispatch();

  const handleSelectCompany = () => {
    dispatch(selectCompany(id));
  };

  const selectedClass = isSelected ? ` ${css.activeTableRow}` : "";

  return (
    <div className={css.tableRow + selectedClass} key={id}>
      <div className={css.cell}>
        <input type="checkbox" name="company1" />
      </div>
      <div className={css.cell} onClick={handleSelectCompany}>
        {name}
      </div>
      <div className={css.cell}>{employeeCount}</div>
      <div className={css.cell}>{address}</div>
    </div>
  );
};

export default CompanyItem;
