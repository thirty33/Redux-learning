import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    loading: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            // 'data/setLoading'
            state.loading = action.payload;
        },
    }
})

export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer; 