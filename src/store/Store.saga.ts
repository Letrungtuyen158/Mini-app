import { all, takeLatest } from 'redux-saga/effects';
import { BlogActions } from './Blog';
import { getBlogById, getBlogList } from './Blog/Blog.saga';

export default function* root() {
    yield all([
        takeLatest(BlogActions.getBlogsRequest.type, getBlogList),
        takeLatest(BlogActions.getBlogsDetailRequest.type, getBlogById)
    ]);
}
