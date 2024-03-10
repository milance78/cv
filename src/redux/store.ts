import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import educationReducer from './features/educationSlice';
import skillsReducer from './features/skillsSlice';


const store = configureStore({
    
    reducer: {
        skills: skillsReducer,
        education: educationReducer,   
    }
});


export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default store