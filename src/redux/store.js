import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from './features/skillsSlice'

const store = configureStore(
    {
        reducer: {
           skills: skillsReducer
        },
    }
);

export default store