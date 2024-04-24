import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Formulaire //
axios.defaults.baseURL = 'http://localhost:3001/api/v1/'

export const loginUserThunk = createAsyncThunk(
    'datas/loginUserThunk',
    async ({ email, password }) => {
      try {
        const response = await axios.post('/user/login', {
          email: email,
          password: password
        });
        return response.data
      }
       catch (error) {
        console.error(error)
        throw error
      }
    }
  );

  export const getProfileThunk = createAsyncThunk('profile/getProfileThunk', async (token) => {
    try {
      const response = await axios.post('/user/profile', {
        headers :{ 
          'Authorization':`Bearer ${token}`
        } 
      });
      return response.data
    }
    catch (error) {
      console.error(error)
      throw error
    }
  })

export const usersSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    getProfileUser: (currentState, action) => {
      console.log(action)
      const newUser = {...currentState, userName: action.payload}
      return newUser
    },
    // removeUser: () => {
    //     const list = [...currentState.list].filter(() =>
    // )
    // },
    // updateUser: () => {

    // }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.fulfilled, (currentState, action) => {
        return action.payload
    })
    builder.addCase(getProfileThunk.fulfilled, (currentState,action) => {
      return {...currentState, newDatas :action.payload}
    })
  }
})