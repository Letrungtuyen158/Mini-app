/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterGetBlogList } from 'interface/BlogApp';
import { IBlog } from '../../interface/BlogApp';

export const initialState = {
    blog: {} as IBlog,
    isLoadingDetailBlog: false,
    blogList: [] as IBlog[],
    isLoadingGetBlogList: false
};

const blogSlice = createSlice({
    initialState,
    name: 'Blog',
    reducers: {
        getBlogsRequest(state, action: PayloadAction<IFilterGetBlogList>) {
            state.isLoadingGetBlogList = true;
        },
        getBlogsSuccess(state, action: PayloadAction<IBlog[]>) {
            state.blogList = action.payload;
            state.isLoadingGetBlogList = false;
        },
        getBlogsFail(state) {
            state.isLoadingGetBlogList = false;
        },
        // Detail
        getBlogsDetailRequest(state, action: PayloadAction<number>) {
            state.isLoadingDetailBlog = true;
        },
        getBlogsDetailSuccess(state, action: PayloadAction<IBlog>) {
            state.blog = action.payload;
            state.isLoadingDetailBlog = false;
        },
        getBlogsDetailFail(state) {
            state.isLoadingDetailBlog = false;
        }
    }
});

export const AppSelectors = {};

export const BlogActions = blogSlice.actions;
export const BlogReducer = blogSlice.reducer;
