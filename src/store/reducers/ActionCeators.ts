import { AppDispatch } from '../store'
import axios from 'axios'
import { IUser } from '../../models/IUser'
import { userSlice } from './UserSlice'

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(userSlice.actions.usersFetching())
		const response = await axios.get<IUser[]>(
			'https://jsonplaceholder.typicode.com/users'
		)
		console.log(response, 'response')
		const data = response.data
		console.log(data, 'data')
		dispatch(userSlice.actions.userFetchingSuccess(data))
	} catch (error) {
		let errorMessage = 'Response Error'
		if (error instanceof Error) {
			errorMessage = error.message
		}

		dispatch(userSlice.actions.userFetchingError(errorMessage))
	}
}
