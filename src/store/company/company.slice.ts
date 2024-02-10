import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { mockCompanies } from './company.mock';

export type Company = {
  id: number;
  name: string;
  employeeCount: number;
  address: string;
}

type CompanyState = {
  items: Company[],
  selectedСompanies: number[],
}

const initialState = {
  items: mockCompanies,
  selectedСompanies: [],
} as CompanyState;

const companySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
})

export default companySlice.reducer;
// export const { } = companySlice.actions;
