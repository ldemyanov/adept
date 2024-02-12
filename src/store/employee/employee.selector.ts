import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { EMPLOYEE_PER_ITEMS } from "./employee.slice";

const selectCompanyEmployees = createSelector(
  [
    (state: RootState) => state.company.selectedCompanies,
    (state: RootState) => state.employee.items,
  ],
  (selectedCompanies, emoloyees) => {
    return emoloyees.filter((emoloyee) => selectedCompanies.includes(emoloyee.companyId)).slice(0, EMPLOYEE_PER_ITEMS);
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

