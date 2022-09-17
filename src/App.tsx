import React from 'react'
import './App.css'
import PostContainer from './components/PostContainer'
// import { useAppDispatch, useAppSelector } from './hooks/redux'
// import { fetchUsers } from './store/reducers/ActionCeators'

function App() {
	// const { count } = useAppSelector((state) => state.userReducer)
	// const { increment } = userSlice.actions
	// const dispatch = useAppDispatch()
	// const { users, isLoading, error } = useAppSelector(
	// 	(state) => state.userReducer
	// )
	//
	// useEffect(() => {
	// 	dispatch(fetchUsers())
	// }, [])

	return (
		<div className="App">
			{/*<h1>{count}</h1>*/}
			{/*<button onClick={() => dispatch(increment(1))}>*/}
			{/*	INCREMENT*/}
			{/*</button>*/}
			{/*{isLoading && <h1>Loading...</h1>}*/}
			{/*{error && <h1>{error}</h1>}*/}
			{/*{JSON.stringify(users, null, 2)}*/}
			<PostContainer />
		</div>
	)
}

export default App
