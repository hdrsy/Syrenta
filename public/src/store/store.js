import{create} from "zustand";
import { createAuthSlice } from "./slices/AuthSlice";
import { createProcesSlice } from "./slices/ProcessSlice";
import {createLisitingSlice} from "./slices/ListingsSlice"

export const useAppStore = create()((...a) => ({
  ...createAuthSlice(...a), 
  ...createProcesSlice(...a),
  ...createLisitingSlice(...a), 
}));

