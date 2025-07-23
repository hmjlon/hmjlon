// src/hooks/useAppDispatch.ts
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

// src/hooks/useAppSelector.ts
import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
