import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = axios.defaults.headers.common.Authorization;

export const tasksApi = createApi({
  reducerPath: 'tasks',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goose-track-project-back.onrender.com/',
    prepareHeaders(headers) {
      headers.set('Authorization', token);
      return headers;
    },
  }),

  tagTypes: ['Tasks'],

  endpoints: builder => ({
    getMonthlyTasks: builder.query({
      query: date => ({
        url: '/tasks',
        method: 'GET',
        body: date,
      }),
      providesTags: ['Tasks'],
    }),

    createTasks: builder.mutation({
      query: data => ({
        url: '/tasks',
        method: 'POST',
        body: data,
      }),
      providesTags: ['Tasks'],
    }),

    editTasks: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: { data },
      }),
      providesTags: ['Tasks'],
    }),

    deleteTasks: builder.mutation({
      query: id => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetMonthlyTasksQuery,
  useCreateTasksMutation,
  useEditTasksMutation,
  useDeleteTasksMutation,
} = tasksApi;
