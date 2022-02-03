import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getBookingsApi} from "../../apis/booking";

const initialState = {
    booking: null,
    bookings: [],
    isLoading: false
};
export const getBookings = createAsyncThunk(
    "getBooking", async ({query}, {rejectWithValue}) => {
        try {
            let data  =await getBookingsApi({query})
            return {data}
        } catch (e) {
            return rejectWithValue(e?.message)
        }
    });
export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    extraReducers: {
        [getBookings.pending]:(state)=>{
            state.isLoading = true
        },
        [getBookings.rejected]:(state)=>{
            state.isLoading = false
            // state
        },
        [getBookings.fulfilled]:(state,action)=>{
            // console.log()
            state.bookings=action?.payload?.data || []
            state.isLoading = false
        }
    }

});


export default bookingSlice.reducer;
