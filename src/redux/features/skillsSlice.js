import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
    name: 'skills',
    initialState: {
        skillsArray: [],
    },
    reducers: {
        addSkill: (state, action) => {
            state.skillsArray = [
                ...state.skillsArray,
                action.payload,
            ]
        }
    }
});

export const { addSkill } = visibilitySlice.actions;
export default visibilitySlice.reducer;