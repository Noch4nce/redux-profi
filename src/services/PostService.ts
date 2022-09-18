import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IPost } from '../models/IPost'

export const postAPI = createApi({
	reducerPath: 'postAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3004/'
	}),
	tagTypes: ['Post'],
	endpoints: (builder) => ({
		fetchAllPosts: builder.query<IPost[], number>({
			query: (limit: number = 5) => ({
				url: 'posts',
				params: {
					_limit: limit
				}
			}),
			providesTags: () => ['Post']
		}),
		createPost: builder.mutation<IPost, IPost>({
			query: (post) => ({
				url: 'posts',
				method: 'POST',
				body: post
			}),
			invalidatesTags: ['Post']
		}),
		updatePost: builder.mutation<IPost, IPost>({
			query: (post) => ({
				url: `posts/${post.id}`,
				method: 'PUT',
				body: post
			}),
			invalidatesTags: ['Post']
		}),
		deletePost: builder.mutation<IPost, IPost>({
			query: (post) => ({
				url: `posts/${post.id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Post']
		})
	})
})
