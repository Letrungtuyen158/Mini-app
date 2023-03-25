import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { getApiBlogById, getApiBlogList } from 'services';
import { IFilterGetBlogList } from 'interface/BlogApp';
import { BlogActions } from './Blog.redux';

export function* getBlogList(action: PayloadAction<IFilterGetBlogList>): any {
    try {
        const res = yield call(getApiBlogList, action?.payload);
        if (res.ok) {
            yield put(BlogActions.getBlogsSuccess(res?.data));
        } else {
            yield put(BlogActions.getBlogsFail());
        }
    } catch (error: any) {
        yield put(BlogActions.getBlogsFail());
    }
}

export function* getBlogById(action: PayloadAction<number>): any {
    try {
        const res = yield call(getApiBlogById, action?.payload);
        if (res.ok) {
            yield put(BlogActions.getBlogsDetailSuccess(res?.data));
        } else {
            yield put(BlogActions.getBlogsDetailFail());
        }
    } catch (error: any) {
        yield put(BlogActions.getBlogsDetailFail());
    }
}
