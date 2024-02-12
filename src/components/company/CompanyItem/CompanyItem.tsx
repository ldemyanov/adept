import React from "react";
import clsx from "clsx";
import { useAppDispatch } from "../../../store";
import {
  selectCompany,
  type Company,
  changeCompanyName,
  changeCompanyAdress,
  removeCompany,
} from "../../../store/company/company.slice";
import css from "./CompanyItem.module.css";
import Field from "../../ui/Field/Field";

type CompanyItemProps = {
  company: Company;
  isSelected: boolean;
};

const CompanyItem: React.FC<CompanyItemProps> = React.memo(({ company, isSelected }) => {
  const { id, address, employeeCount, name } = company;
  const dispatch = useAppDispatch();

  const handleSelectCompany = () => {
    dispatch(selectCompany(id));
  };

  const acceptChangeCompanyName = (newName: string) => {
    dispatch(changeCompanyName({ id: id, name: newName }));
  };

  const acceptChangeCompanyAddress = (newAddress: string) => {
    dispatch(changeCompanyAdress({ id: id, address: newAddress }));
  };

  const handleRemoveCompany = () => {
    dispatch(removeCompany(id));
  };

  return (
    <div className={clsx(css.tableRow, { [css.activeTableRow]: isSelected })}>
      <div>
        <input type="checkbox" value={company.id} checked={isSelected} onChange={handleSelectCompany} />
      </div>
      <Field value={name} acceptChange={acceptChangeCompanyName} />
      <div>{employeeCount}</div>
      <Field value={address} acceptChange={acceptChangeCompanyAddress} />
      <button onClick={handleRemoveCompany}>R</button>
    </div>
  );
});

export default CompanyItem;
