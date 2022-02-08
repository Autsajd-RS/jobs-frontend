import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => ({
            ...state,
            value: state.value + 1
        }),
        decrement: (state) => ({
            ...state,
            value: state.value - 1
        }),
        incrementByAmount: (state, action: PayloadAction<number>) => ({
            ...state,
            value: (state.value += action.payload)
        }),
        setValue: (state, action: PayloadAction<number>) => ({
            ...state,
            value: action.payload
        })
    },
    extraReducers: (builder) => {
        builder.addCase(REHYDRATE, (state) => {
            console.log('IM HERE');

            return {
                ...state
            };
        });
    }
});

export const { increment, decrement, incrementByAmount, setValue } = counterSlice.actions;

export default counterSlice.reducer;
