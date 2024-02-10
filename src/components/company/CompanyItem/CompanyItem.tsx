import clsx from "clsx";
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

  return (
    <div className={clsx(css.tableRow, { [css.activeTableRow]: isSelected })} key={id}>
      <div className={css.cell}>
        <input type="checkbox" value={company.id} onChange={handleSelectCompany} checked={isSelected} />
      </div>
      <div className={css.cell}>{name}</div>
      <div className={css.cell}>{employeeCount}</div>
      <div className={css.cell}>{address}</div>
    </div>
  );
};

export default CompanyItem;
