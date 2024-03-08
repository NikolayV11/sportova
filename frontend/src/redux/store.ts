import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import catalog from "./catalog";
import filter from "./filtration";
import FilterParams from "./FilterParams";
export const store = configureStore({
  reducer: { catalog, filter, FilterParams },
});

// store.getState - Ворачивает фенкцию содержащию store с типоми из reducer:{}
// ReturnType - разкрывает функцию и достает все типы
// RootState - хранит объект с типами из store входящие в reducer:{}
export type RootState = ReturnType<typeof store.getState>;

// Получаем типы из store
export type AppDispatch = typeof store.dispatch;
// Передаём все полученные типы в useAppDispatch и получаем костомный useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
