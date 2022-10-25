import { configureStore } from '@reduxjs/toolkit';
import competitorReducer from './features/competitors/competitorsSlice';
import modalSlice from './features/modal/modalSlice';

export const store = configureStore({
    reducer: {
        competitor: competitorReducer,
        modal: modalSlice
    }
});