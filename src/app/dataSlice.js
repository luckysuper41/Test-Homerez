import { createSlice } from '@reduxjs/toolkit';

// Initialization Data
const initialData = [];

const dataSlice = createSlice({
     name: 'data',
     initialState: initialData,
     reducers: {
          // action addData - Like
          addData(state, action) {
               state.push(action.payload);
          },

          // action removeData - Unlike
          removeData(state, action) {
               const removeDataId = action.payload;
               return state.filter(item => item.id !== removeDataId);
          }
     }
});

const { actions, reducer } = dataSlice;
export const { addData, removeData } = actions;
export default reducer;