import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitState {
    scrollToEvent: number;
    scrollToCrew: number;
    scrollToWhatsNew: number;
    scrollToVirtualOffice: number;
    scrollToContact: number;
}

const initialState: IInitState = {
    scrollToEvent: 0,
    scrollToCrew: 0,
    scrollToWhatsNew: 0,
    scrollToVirtualOffice: 0,
    scrollToContact: 0,
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvenets: (state, { payload }: PayloadAction<number>) => ({
            ...state,
            scrollToEvent: payload,
        }),
        setCrew: (state, { payload }: PayloadAction<number>) => ({
            ...state,
            scrollToCrew: payload,
        }),
        setWhatsNew: (state, { payload }: PayloadAction<number>) => ({
            ...state,
            scrollToWhatsNew: payload,
        }),
        setVirtualOffice: (state, { payload }: PayloadAction<number>) => ({
            ...state,
            scrollToVirtualOffice: payload,
        }),
        setContact: (state, { payload }: PayloadAction<number>) => ({
            ...state,
            scrollToContact: payload,
        }),
    },
})

// Action creators are generated for each case reducer function
export const { setEvenets, setCrew, setWhatsNew, setVirtualOffice, setContact } = eventsSlice.actions;

export default eventsSlice.reducer;