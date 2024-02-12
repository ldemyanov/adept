import React from "react";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  type Company,
  changeCompanyName,
  changeCompanyAdress,
  removeCompany,
  changeSelectedCompanies,
} from "../../../store/company/company.slice";
import css from "./CompanyItem.module.css";
import Field from "../../ui/Field/Field";
import { updateSelectedCompanies } from "../../../store/company/company.helpers";
import { updateDisplayedItems } from "../../../store/employee/employee.slice";

type CompanyItemProps = {
  company: Company;
  isSelected: boolean;
};

const CompanyItem: React.FC<CompanyItemProps> = React.memo(({ company, isSelected }) => {
  const { id, address, employeeCount, name } = company;
  const selectedCompanies = useAppSelector((state) => state.company.selectedCompanies);
  const dispatch = useAppDispatch();

  const handleSelectCompany = () => {
    const companyIds = updateSelectedCompanies(selectedCompanies, id);
    dispatch(changeSelectedCompanies({ companyIds }));
    dispatch(updateDisplayedItems({ companyIds }));
  };

  const acceptChangeCompanyName = (name: string) => {
    dispatch(changeCompanyName({ id, name }));
  };

  const acceptChangeCompanyAddress = (address: string) => {
    dispatch(changeCompanyAdress({ id, address }));
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
