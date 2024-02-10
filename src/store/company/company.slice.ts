import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mockCompanies } from './company.mock';

export type Employee = {
  id: string;
  firstName: string;
  secondName: string;
  position: string;
}

export type Company = {
  id: string;
  name: string;
  employeeCount: number;
  address: string;
  emoloyees: Employee[];
}

type CompanyState = {
  items: Company[],
  selectedCompany: string | null,
  selectedEmployee: string | null,
  selectedСompanies: number[],
  selectedEmployees: number[],
}

const initialState = {
  items: mockCompanies,
  selectedCompany: '1',
  selectedEmployee: '',
  selectedСompanies: [],
  selectedEmployees: [],
} as CompanyState;

const companySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    selectCompany(state, action: PayloadAction<string>) {
      state.selectedCompany = action.payload;
    },
    removeEmployee(state, action: PayloadAction<string>) {
      const companyIndex = state.items.findIndex((company) => company.id === state.selectedCompany);
      state.items[companyIndex].emoloyees = state.items[companyIndex].emoloyees.filter((emoloyee) => emoloyee.id !== action.payload);
    },
    addCompany: (state, action: PayloadAction<Company>) => {
      state.items.push(action.payload);
    },
  },
})

export default companySlice.reducer;
export const { selectCompany, removeEmployee, addCompany } = companySlice.actions;
