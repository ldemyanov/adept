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

export const EMPLOYEE_PER_ITEMS = 15;

type EmployeeState = {
  items: Employee[],
  displayedItems: Employee[],
  selectedEmployees: string[],
  currentPage: number,
}

const initialState = {
  items: mockEmployes,
  displayedItems: [],
  selectedEmployees: [],
  currentPage: 1,
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
        state.selectedEmployees = []
        return
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
    // getNextPage: (state) => {
    //   const start = state.currentPage * PER_ITEMS
    //   state.items.push(...mockEmployes.slice(start, start + PER_ITEMS))
    //   state.currentPage += 1
    // },
  },
})

export default employeeSlice.reducer;
export const {
  removeEmployee,
  addEmployee,
  selectAllEmployees,
  // getNextPage,
  changeFirstName,
  changeLastNameName,
  changePosition,
  selectEmployee
} = employeeSlice.actions;