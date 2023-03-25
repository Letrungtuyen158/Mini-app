// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce';
import { IBlogForm, IFilterGetBlogList } from 'interface/BlogApp';

const BASE_API_URL = process.env.REACT_APP_BASE_API;

const defaultApiSauceConfig = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
};

const api = create({
    ...defaultApiSauceConfig,
    baseURL: BASE_API_URL
});

const getApiBlogList = (filter: IFilterGetBlogList) => api.get('/blogs', filter);
const getApiBlogById = (id: number) => api.get(`/blogs/${id}`);
const createBlogApi = (data: IBlogForm) => api.post(`/blogs`, data);
const editBlogApi = (data: IBlogForm, id: string) => api.put(`/blogs/${id}`, data);

export { getApiBlogList, getApiBlogById, createBlogApi, editBlogApi };
