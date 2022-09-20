import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

const fullscreenSlice = createSlice({
    name: 'fullscreen',
    initialState,
    reducers: {
        // increment
        increamented(state) {
            state.value++
        },
    }
})

export default fullscreenSlice.reducer