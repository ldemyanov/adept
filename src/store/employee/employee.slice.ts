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

type EmployeeState = {
  items: Employee[],
  selectedEmployees: string[],
}

const initialState = {
  items: mockEmployes,
  selectedEmployees: [],
} as EmployeeState;

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    removeEmployee: (state: EmployeeState, action: PayloadAction<string>) => {
      state.items = state.items.filter((employee) => employee.id !== action.payload)
    },
    addEmployee: (state: EmployeeState, action: PayloadAction<Employee>) => {
      state.items.push(action.payload);
    },
    selectAllEmployees: (state) => {
      if (state.selectedEmployees.length === state.items.length) {
        state.selectedEmployees = []
        return
      }
      // TODO: когда будет реализована динамическая подгузка, то выбирать не все, а только загруженные
      state.selectedEmployees = state.items.map(({ id }) => id)
    },
  },
})

export default employeeSlice.reducer;
export const { removeEmployee, addEmployee, selectAllEmployees } = employeeSlice.actions;