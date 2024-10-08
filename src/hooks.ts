import { RootState, DispatchType } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch:()=> DispatchType = useDispatch ;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector