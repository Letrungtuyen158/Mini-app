import { BlogDetail, CreateOrEditBlog } from 'components/Blog';
import { ROUTERS } from 'constants/router';
import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './Blogs';

const MainView = () => {
    return (
        <Routes>
            <Route path="/" element={<Blog />}></Route>
            <Route path={ROUTERS.DETAIL_BLOG} element={<BlogDetail />}></Route>
        </Routes>
    );
};

export default memo(MainView);
