import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { mockEmployes } from "./employee.mock";

export type Employee = {
  id: number;
  firstName: string;
  secondName: string;
  company: number;
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
    removeEmployee(state: CompanyState, action: PayloadAction<number>) {
      state.items.filter((employee) => employee.id !== action.payload)
    }
  },
})

export default employeeSlice.reducer;
export const { removeEmployee } = employeeSlice.actions;