import { createSlice } from '@reduxjs/toolkit'
import { fetchUserData, editUserName } from '../index'

export const userReducer = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    logoutUser: () => {
      return {}
    },
  },
  extraReducers: (builder) => { 
    // fetchUserData thunk config // fetchUserData thunk config //
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true
      state.error = null    
    })
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.auth = action.payload.auth
      state.datasUser = action.payload.datasUser
      state.loading = false
    })
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    }) 
    // editUserName thunk config // editUserName thunk config //
    builder.addCase(editUserName.pending, (state) => {
      state.loading = true
      state.error = null
    }), // replace only userName when editUserName is ok //
    builder.addCase(editUserName.fulfilled, (state, action) => {
      state.datasUser.body.userName = action.payload.body.userName
      state.loading = false
    }),
      builder.addCase(editUserName.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  },
})
