import { createSlice } from '@reduxjs/toolkit';


const initialData = [
     {
          id: 1,
          title: "Paris"
     },
     {
          id: 2,
          title: "Nantes"
     },
     {
          id: 3,
          title: "Toulouse"
     },
     {
          id: 4,
          title: "Blois"
     }
];

const dataSlice = createSlice({
     name: 'data',
     initialState: initialData,
     reducers: {
          addData(state, action) {
               state.push(action.payload);
          },
          removeData(state, action) {
               const removeDataId = action.payload;
               return state.filter(item => item.id !== removeDataId);
          }
     }
});

const { actions, reducer } = dataSlice;
export const { addData, removeData } = actions;
export default reducer;