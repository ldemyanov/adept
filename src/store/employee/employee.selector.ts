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

export { selectCompanyEmployees };
