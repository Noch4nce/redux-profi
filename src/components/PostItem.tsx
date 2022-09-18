import React, { FC } from 'react'
import { IPost } from '../models/IPost'

interface PostItemProps {
	post: IPost
	remove: (post: IPost) => void
	update: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({ post, update, remove }) => {
	const handleUpdatePost = () => {
		const title = prompt() || ''
		update({ ...post, title })
	}

	const handleDeletePost = (event: React.MouseEvent) => {
		event.stopPropagation()
		remove(post)
	}

	return (
		<div className="post" onClick={handleUpdatePost}>
			<span>
				{post.id}. {post.title}
			</span>
			<button onClick={handleDeletePost}>Delete</button>
		</div>
	)
}

export default PostItem
