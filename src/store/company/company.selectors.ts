import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const checkSelectedAll = createSelector(
  [
    (state: RootState) => state.company.selectedCompanies,
    (state: RootState) => state.company.items,
  ],
  (selectedCompanies, companies) => {
    return selectedCompanies.length === companies.length;
  }
);

export { checkSelectedAll };