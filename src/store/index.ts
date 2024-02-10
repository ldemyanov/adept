import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';

import companySlice from './company/company.slice';
import employeeSlice from "./employee/employee.slice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    company: companySlice,
    employee: employeeSlice,
  },
});

const initStore = () => store;

type AppStore = ReturnType<typeof initStore>;
type AppDispatch = AppStore['dispatch'];

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { initStore, useAppDispatch, useAppSelector };