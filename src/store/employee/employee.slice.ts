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

type CompanyState = {
  items: Employee[],
}

const initialState = {
  items: mockEmployes,
  selectedСompanies: [],
} as CompanyState;

const employeeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    removeEmployee: (state: CompanyState, action: PayloadAction<string>) => {
      state.items = state.items.filter((employee) => employee.id !== action.payload)
    },
    addEmployee: (state: CompanyState, action: PayloadAction<Employee>) => {
      state.items.push(action.payload);
    }
  },
})

export default employeeSlice.reducer;
export const { removeEmployee, addEmployee } = employeeSlice.actions;