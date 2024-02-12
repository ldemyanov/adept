import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const getDisplayedEmployees = createSelector(
  [
    (state: RootState) => state.employee.countShowedItems,
    (state: RootState) => state.employee.filteredItems,
  ],
  (countShowedItems, filteredItems) => filteredItems.slice(0, countShowedItems)
)

const checkEmployeesSelectedAll = createSelector(
  [
    (state: RootState) => state.employee.selectedEmployees,
    (state: RootState) => state.employee.items,
  ],
  (selectedCompanies, companies) => selectedCompanies.length !== 0 && selectedCompanies.length === companies.length
);

const checkScrollFinish = createSelector(
  [
    (state: RootState) => state.employee.countShowedItems,
    (state: RootState) => state.employee.filteredItems,
  ],
  (countShowedItems, filteredItems) => filteredItems.length <= countShowedItems
)

export {
  getDisplayedEmployees,
  checkEmployeesSelectedAll,
  checkScrollFinish,
};

