import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => 'users',
      providesTags: result => result 
      ? [
        ...result.map(({id}) => ({type: 'Users', id})),
        {type: 'Users', id: 'LIST_USERS'}
      ]
      : [{type: 'Users', id: 'LIST_USERS'}]
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body
      }),
      invalidatesTags: [{type: 'Users', id: 'LIST_USERS'}]
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{type: 'Users', id: 'LIST_USERS'}]
    })
  })
})

export const {useGetUsersQuery, useAddUserMutation, useDeleteUserMutation} = usersApi