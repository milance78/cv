import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import '../../services/server';
import { Skill } from "../../components/skills/Skills";

interface SkillState {
    skillsArray: Skill[];
    getStatus: string,
    postStatus: string,
}

const initialState: SkillState = {
    skillsArray: [],
    getStatus: 'fulfilled',
    postStatus: 'fulfilled',
}

export const fetchSkillsData = createAsyncThunk(
    'skills/fetch',
    async () => {
        try {
            const response = await fetch('/api/skills');
            return response.json();
        } catch (error) {
            console.log(error);
        }
    });

export const sendSkillsData = createAsyncThunk(
    'skills/send',
    async (userInputData: Skill) => {
        try {
            const response = await fetch(
                '/api/skills',
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...userInputData,
                        id: crypto.randomUUID(),
                    }),
                });
            return response.json();
        } catch (error) {
            console.log(error);
        }
    });

export const skillsSlice = createSlice({
    name: 'skills',
    initialState: initialState,
    reducers: {
        // since all necessary actions in this case are asynchroneus, this object is empty. In case that there are also some synchroneus actions, this object would be needed for storing them
        // addSkill: (state, action) => {
        //     state.skillsArray = [
        //         ...state.skillsArray,
        //         action.payload,
        //     ]
        // }
    },
    extraReducers: (builder) => {
        builder
            // fetchSkillsData thunk
            .addCase(fetchSkillsData.pending,
                (state) => {
                    state.getStatus = 'loading';
                })
            .addCase(fetchSkillsData.fulfilled,
                (state, action) => {
                    state.skillsArray = action.payload;
                    state.getStatus = 'complete';
                })
            .addCase(fetchSkillsData.rejected,
                (state) => {
                    state.getStatus = 'failed';
                })
            // sendSkillsData thunk
            .addCase(sendSkillsData.pending,
                (state) => {
                    state.postStatus = 'loading';
                })
            .addCase(sendSkillsData.fulfilled,
                (state) => {
                    state.postStatus = 'complete';
                })
            .addCase(sendSkillsData.rejected,
                (state) => {
                    state.postStatus = 'failed';
                })
    }
});

// export const { addSkill } = skillsSlice.actions;
export default skillsSlice.reducer;