import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const selectedCompanies = (state: RootState) => state.company.selectedCompanies;

const isSelectedCompanies = createSelector(
  [selectedCompanies],
  (selectedCompanies) => {
    return selectedCompanies.length > 0;
  }
);

export { isSelectedCompanies };
