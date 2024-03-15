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
    getStatus: 'complete',
    postStatus: 'complete',
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
        reset: () => initialState
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
                    // bug!!!
                    // const orderedRange = unorderedSkills
                    //     .map((el: any) => el.skillRange)
                    //     .sort((a: number, b: number) => a - b)
                    //     .reverse();
                    // const orderedSkills = orderedRange
                    //     .map((el: any) => {
                    //         const [a] = unorderedSkills
                    //             .filter((skill: any) => skill.skillRange === el)
                    //         return a
                    //     });
                    state.skillsArray = action.payload && action.payload
                        .sort((a: Skill, b: Skill) =>
                            Number(a.skillRange) - Number(b.skillRange))
                        .reverse();
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

export const { reset } = skillsSlice.actions;
export default skillsSlice.reducer;