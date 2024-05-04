import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosRequest } from '../utils/axiosConfig/axiosRequest'
// axiosRequest(url, data, token = null, method = 'post') //

export const fetchUserData = createAsyncThunk(
  'datas/fetchUserData',
  async (valueForm, thunkAPI) => {
    try {
      const response = await axiosRequest('/user/login', valueForm)
      const auth = {
        status: response.status,
        token: response.body.token,
      }
      const responseProfil = await axiosRequest('/user/profile', null, auth.token) // null = data (axiosRequest) //
      return {auth: auth, datasUser: responseProfil}
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)