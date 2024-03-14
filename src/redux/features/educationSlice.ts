import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import '../../services/server';

export interface Education {
    date: string;
    title: string;
    description: string;
}
interface EducationState {
    educationArray: Education[];
    status: string,
}

const initialState: EducationState = {
    educationArray: [],
    status: 'fulfilled',
}

export const fetchEducationData = createAsyncThunk(
    'education/fetch',
    async () => {
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
        // since all necessary actions in this case are asynchroneus, this object is empty. In case that there are also some synchroneus actions, this object would be needed for storing them
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchEducationData.pending,
                (state) => {
                    state.status = 'loading';
                })
            .addCase(
                fetchEducationData.fulfilled,
                (state, action) => {
                    state.educationArray = action.payload;
                    state.status = 'complete';
                })
            .addCase(
                fetchEducationData.rejected,
                (state) => {
                    state.status = 'failed';
                }
            )
    }
});

export default educationSlice.reducer;