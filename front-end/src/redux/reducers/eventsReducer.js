import { createSlice } from '@reduxjs/toolkit'

export const eventsReducer = createSlice({
  name: 'events',
  initialState: {},
  reducers: {
    cancelEditForm: (state, action) => {
      return { ...state, cancelEditForm: action.payload }
    },
    rememberActivated: (state, action) => {
      return { ...state, rememberActivated: action.payload }
    }
  },
})