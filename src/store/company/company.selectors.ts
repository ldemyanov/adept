import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const companies = (state: RootState) => state.company.items;
const selectedCompany = (state: RootState) => state.company.selectedCompany;

const selectCompanyEmployees = createSelector(
  [companies, selectedCompany],
  (companies, selectedCompany) => {
    const company = companies.find((company) => company.id === selectedCompany);
    return company?.emoloyees;
  }
);

export { selectCompanyEmployees };
