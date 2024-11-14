import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  description: null | string;
  deleted_at: null | string;
}

const category: Category = {
  id: "0ce68ddd-4981-4ee2-a23b-a01452b96b01",
  name: "Olive",
  description: "Earum quo at dolor tempore nisi.",
  is_active: true,
  deleted_at: null,
  created_at: "2022-08-15T10:59:09+0000",
  updated_at: "2022-08-15T10:59:09+0000",
};

export const initialState: Category[] = [
    category,
    {
      id: "0ce68ddd-4981-4ee2-a23b-a01452b96b02",
      name: "Lime",
      description: "Earum quo at dolor tempore nisi.",
      is_active: true,
      deleted_at: null,
      created_at: "2022-08-15T10:59:09+0000",
      updated_at: "2022-08-15T10:59:09+0000",
    },
    {
      id: "0ce68ddd-4981-4ee2-a23b-a01452b96b03",
      name: "Lemon",
      description: "Earum quo at dolor tempore nisi.",
      is_active: true,
      deleted_at: null,
      created_at: "2022-08-15T10:59:09+0000",
      updated_at: "2022-08-15T10:59:09+0000",
    }
  ]

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  },
});

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;