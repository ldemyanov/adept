import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const companyId = (state: RootState) => state.company.selectedCompanies;
const emoloyees = (state: RootState) => state.employee.items;

const selectCompanyEmployees = createSelector(
  [companyId, emoloyees],
  (selectedCompanies, emoloyees) => {
    return emoloyees.filter((emoloyee) => selectedCompanies.includes(emoloyee.companyId));
  }
);

const checkEmployeesSelectedAll = createSelector(
  [
    (state: RootState) => state.employee.selectedEmployees,
    (state: RootState) => state.employee.items,
  ],
  (selectedCompanies, companies) => {
    return selectedCompanies.length === companies.length && selectedCompanies.length !== 0;
  }
);

export { selectCompanyEmployees, checkEmployeesSelectedAll };

