import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import '../../services/server';

export interface Education {
    date: string;
    title: string;
    description: string;
}
interface EducationState {
    educationArray: Education[]
}

const initialState: EducationState = {
    educationArray: [],
}

export const fetchEducationData = createAsyncThunk(
    'education/fetch',
    async (thunkAPI) => {
        try {
            const response = await fetch('/api/education'); 
            return response.json();
        } catch (error) {
            console.log(error);            
        }
    });

export const educationSlice = createSlice({
    name: 'education',
    initialState: initialState,
    reducers: {
        returnEducation: (state) => {
            return state
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchEducationData.fulfilled,
            (state, action) => {
                state.educationArray = action.payload;             
            })
    }
});

export const { returnEducation } = educationSlice.actions;
export default educationSlice.reducer;