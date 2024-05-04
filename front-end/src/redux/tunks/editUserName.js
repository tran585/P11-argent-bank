import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosRequest } from '../utils/axiosConfig/axiosRequest'
// axiosRequest(url, data, token = null, method = 'post') //

export const editUserName = createAsyncThunk(
  'edit/editUserName',
  async ({ value, token }, thunkAPI) => {
    try {
      const response = await axiosRequest('/user/profile', value, token, 'put')
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)