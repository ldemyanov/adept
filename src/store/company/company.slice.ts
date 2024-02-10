import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mockCompanies } from './company.mock';

export type Company = {
  id: string;
  name: string;
  employeeCount: number;
  address: string;
}

type CompanyState = {
  items: Company[],
  selectedCompany: [],
  selectedEmployee: [],
  selectedCompanies: string[],
  selectedEmployees: number[],
}

const initialState = {
  items: mockCompanies,
  selectedCompany: [],
  selectedEmployee: [],
  selectedCompanies: [],
  selectedEmployees: [],
} as CompanyState;

const companySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    selectCompany: (state, action: PayloadAction<string>) => {
      if (state.selectedCompanies.includes(action.payload)) {
        state.selectedCompanies = state.selectedCompanies.filter((id) => id !== action.payload)
        return
      }
      state.selectedCompanies.push(action.payload)
    },
    addCompany: (state, action: PayloadAction<Company>) => {
      state.items.push(action.payload);
    },
    removeCompony: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((company) => company.id !== action.payload);
    }
  },
})

export default companySlice.reducer;
export const { selectCompany, addCompany } = companySlice.actions;
