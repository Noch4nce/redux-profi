import axios from 'axios'
import { IUser } from '../../models/IUser'
import { createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(userSlice.actions.usersFetching())
// 		const response = await axios.get<IUser[]>(
// 			'https://jsonplaceholder.typicode.com/users'
// 		)
// 		const data = await response.data
//
// 		dispatch(userSlice.actions.userFetchingSuccess(data))
// 	} catch (error) {
// 		let errorMessage = 'Response Error'
// 		if (error instanceof Error) {
// 			errorMessage = error.message
// 		}
//
// 		dispatch(userSlice.actions.userFetchingError(errorMessage))
// 	}
// }

export const fetchUsers = createAsyncThunk(
	'user/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/uwsers'
			)

			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue('Response error')
		}
	}
)
