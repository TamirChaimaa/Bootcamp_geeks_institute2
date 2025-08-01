import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../api/api';
import type { User } from '../types/types';

interface DataState {
    data: User[];
    loading: boolean;
    error: string | null;
}

const initialState: DataState = {
    data: [],
    loading: false,
    error: null,
};

export const getUsers = createAsyncThunk('data/getUsers', fetchUsers);

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default dataSlice.reducer;
