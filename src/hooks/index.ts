import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { State } from '../types/state';

import type { AppDispatch } from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
