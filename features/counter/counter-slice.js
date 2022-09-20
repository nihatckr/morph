import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

const counterSlide = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        // increment
        increamented(state) {
            state.value++
        },
        // decerement
        decreamented(state) {
            state.value--
        }
        // reset
    }
})

export const { increamented } = counterSlide.actions;
export default counterSlide.reducer