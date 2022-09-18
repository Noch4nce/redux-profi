import React, { FC } from 'react'
import { IPost } from '../models/IPost'

interface PostItemProps {
	post: IPost
	// remove: (post: IPost) => void
	update: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({ post, update }) => {
	const handleUpdatePost = (event: React.MouseEvent) => {
		event.stopPropagation()
		const title = prompt() || ''
		update({ ...post, title })
	}

	return (
		<div className="post" onClick={handleUpdatePost}>
			<span>
				{post.id}. {post.title}
			</span>
			<button>Delete</button>
		</div>
	)
}

export default PostItem
