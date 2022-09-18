import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'
import { IPost } from '../models/IPost'

const PostContainer = () => {
	const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(15)
	const [createPost, {}] = postAPI.useCreatePostMutation()

	const handleAddPost = async () => {
		const title = prompt()
		await createPost({ title, body: title } as IPost)
	}

	return (
		<div>
			<div className="post__list">
				<button onClick={handleAddPost}>Add new post</button>
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>Response error</h1>}
				{posts &&
					posts.map((post) => <PostItem key={post.id} post={post} />)}
			</div>
		</div>
	)
}

export default PostContainer
