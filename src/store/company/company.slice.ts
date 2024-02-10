import { createSlice } from '@reduxjs/toolkit'
import { mockCompanies } from './company.mock';

export type Employee = {
  id: number;
  firstName: string;
  secondName: string;
  position: string;
}

export type Company = {
  id: number;
  name: string;
  employeeCount: number;
  address: string;
  emoloyees: Employee[];
}

type CompanyState = {
  items: Company[],
  selectedCompany: number | null,
  selectedEmployee: number | null,
  selectedСompanies: number[],
  selectedEmployees: number[],
}

const initialState = {
  items: mockCompanies,
  selectedCompany: 1,
  selectedEmployee: 1,
  selectedСompanies: [],
  selectedEmployees: [],
} as CompanyState;

const companySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
})

export default companySlice.reducer;
// export const { } = companySlice.actions;
