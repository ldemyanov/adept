import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { mockEmployes } from "./employee.mock";

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  companyId: string;
  position: string;
}

const EMPLOYEE_PER_ITEMS = 12;

type EmployeeState = {
  items: Employee[],
  filteredItems: Employee[],
  selectedEmployees: string[],
  currentPage: number,
  countShowedItems: number,
  employeePerItems: number,
}

const initialState = {
  items: mockEmployes,
  filteredItems: [],
  selectedEmployees: [],
  currentPage: 0,
  countShowedItems: EMPLOYEE_PER_ITEMS,
  employeePerItems: EMPLOYEE_PER_ITEMS,
} as EmployeeState;

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    removeEmployee: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((employee) => employee.id !== action.payload);
    },
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.items.push(action.payload);
    },
    selectEmployee: (state, action: PayloadAction<string>) => {
      if (state.selectedEmployees.includes(action.payload)) {
        state.selectedEmployees = state.selectedEmployees.filter((id) => id !== action.payload);
        return;
      }
      state.selectedEmployees.push(action.payload);
    },
    selectAllEmployees: (state) => {
      if (state.selectedEmployees.length === state.items.length) {
        state.selectedEmployees = [];
        return;
      }
      state.selectedEmployees = state.items.map(({ id }) => id)
    },
    changeFirstName: (state, action: PayloadAction<{ firstName: string, id: string }>) => {
      const employee = state.items.find((employee) => employee.id === action.payload.id);
      if (employee) {
        employee.firstName = action.payload.firstName;
      }
    },
    changeLastNameName: (state, action: PayloadAction<{ lastName: string, id: string }>) => {
      const employee = state.items.find((employee) => employee.id === action.payload.id);
      if (employee) {
        employee.lastName = action.payload.lastName;
      }
    },
    changePosition: (state, action: PayloadAction<{ position: string, id: string }>) => {
      const employee = state.items.find((employee) => employee.id === action.payload.id);
      if (employee) {
        employee.position = action.payload.position;
      }
    },
    updateDisplayedItems: (state, action: PayloadAction<{ companyIds: string[] }>) => {
      state.filteredItems = state.items.filter((employee) => {
        return action.payload.companyIds.includes(employee.companyId)
      });

      if (state.filteredItems.length <= state.countShowedItems) {
        state.countShowedItems = Math.max(state.filteredItems.length, state.employeePerItems);
      }
    },
    increaseСountShowedItems: (state) => {
      state.countShowedItems += state.employeePerItems;
    }
  },
})

export default employeeSlice.reducer;
export const {
  removeEmployee,
  addEmployee,
  selectAllEmployees,
  changeFirstName,
  changeLastNameName,
  changePosition,
  selectEmployee,
  updateDisplayedItems,
  increaseСountShowedItems
} = employeeSlice.actions;