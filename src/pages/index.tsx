import { BlogDetail } from 'components/Blog';
import { ROUTERS } from 'constants/router';
import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './Blogs';
import Notfound from './404/404';
const MainView = () => {
    return (
        <Routes>
            <Route path={ROUTERS.HOME} element={<Blog />}></Route>
            <Route path={ROUTERS.DETAIL_BLOG} element={<BlogDetail />}></Route>
            <Route path={ROUTERS.NOT_FOUND} element={<Notfound />}></Route>
        </Routes>
    );
};

export default memo(MainView);
