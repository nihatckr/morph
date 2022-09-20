import { createSlice } from '@reduxjs/toolkit'
import { data360 } from '../../data'


const initialState = {
    data: data360,
    currentIndex: 0,
}

const staticImageSlice = createSlice({
    name: 'staticImage',
    initialState,
})

export default staticImageSlice.reducer