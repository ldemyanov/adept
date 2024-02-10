import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const companyId = (state: RootState) => state.company.selectedCompany;
const emoloyees = (state: RootState) => state.employee.items;

const selectCompanyEmployees = createSelector(
  [companyId, emoloyees],
  (companyId, emoloyees) => {
    return emoloyees.filter((emoloyee) => emoloyee.companyId === companyId);
  }
);

export { selectCompanyEmployees };
