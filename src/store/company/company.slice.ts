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
  selectedCompanies: string[],
  selectedEmployees: number[],
}

const initialState = {
  items: mockCompanies,
  selectedCompanies: [],
  selectedEmployees: [],
} as CompanyState;

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    selectCompany: (state, action: PayloadAction<string>) => {
      if (state.selectedCompanies.includes(action.payload)) {
        state.selectedCompanies = state.selectedCompanies.filter((id) => id !== action.payload);
        return;
      }
      state.selectedCompanies.push(action.payload);
    },
    addCompany: (state, action: PayloadAction<Company>) => {
      state.items.push(action.payload);
    },
    removeCompany: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((company) => company.id !== action.payload);
    },
    selectAllCompanies: (state) => {
      if (state.selectedCompanies.length === state.items.length) {
        state.selectedCompanies = [];
        return;
      }
      state.selectedCompanies = state.items.map(({ id }) => id);
    },
    changeCompanyName: (state, action: PayloadAction<{ id: string, name: string }>) => {
      const company = state.items.find((company) => company.id === action.payload.id);
      if (company) {
        company.name = action.payload.name;
      }
    },
    changeCompanyAdress: (state, action: PayloadAction<{ id: string, address: string }>) => {
      const company = state.items.find((company) => company.id === action.payload.id);
      if (company) {
        company.address = action.payload.address;
      }
    },
    changeEmployeeCount: (state, action: PayloadAction<{ id: string, increment: number }>) => {
      const company = state.items.find((company) => company.id === action.payload.id);
      if (company) {
        company.employeeCount += action.payload.increment;
      }
    }
  },
})

export default companySlice.reducer;
export const {
  selectCompany,
  addCompany,
  selectAllCompanies,
  changeCompanyAdress,
  changeCompanyName,
  removeCompany,
  changeEmployeeCount
} = companySlice.actions;
