import { PaginatedItems } from 'components/common';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { BlogActions } from 'store/Blog';
import { IFilterGetBlogList, ORDER } from 'interface/BlogApp';
import { HeaderBlog } from 'components/layout/Header';
import { Footer } from 'components/layout';
import { BlogList, CreateOrEditBlog } from 'components/Blog';

export const defaultFilter = {
    limit: 12,
    page: 1,
    sortBy: 'createdAt',
    order: ORDER.desc,
    search: ''
};

const BlogScreen = () => {
    const filterRef = useRef<any>(defaultFilter);
    const dispatch = useDispatch();
    const stateBlogRedux = useSelector((state: RootState) => state);
    const getBlogList = useCallback((filter?: IFilterGetBlogList) => {
        dispatch(BlogActions.getBlogsRequest(filter ?? filterRef.current));
    }, []);

    useEffect(() => {
        getBlogList();
    }, []);
    const onchangePage = useCallback((page: number) => {
        const newFilter = {
            ...filterRef.current,
            page
        };
        getBlogList(newFilter);
        filterRef.current = newFilter;
    }, []);

    const handleSearch = useCallback((v?: string) => {
        const newFilter = {
            ...filterRef.current,
            search: v || '',
            page: 1
        };
        getBlogList(newFilter);
        filterRef.current = newFilter;
    }, []);

    const handleSort = useCallback((v?: ORDER) => {
        const newFilter = {
            ...filterRef.current,
            order: v
        };
        getBlogList(newFilter);
        filterRef.current = newFilter;
    }, []);

    return (
        <>
            <div className=" mt-[50px] mx-auto container mb-6 font-bold text-2xl uppercase text-black">
                Generate Blog:
            </div>
            <CreateOrEditBlog />
            <HeaderBlog onSearch={handleSearch} onSort={handleSort} />
            <BlogList blogList={stateBlogRedux?.blog?.blogList} stateBlogRedux={stateBlogRedux} />
            <PaginatedItems
                className="flex justify-center mb-10 mt-6"
                itemsPerPage={defaultFilter.limit}
                total={
                    stateBlogRedux?.blog?.blogList?.length < 12
                        ? stateBlogRedux?.blog?.blogList?.length
                        : 70
                }
                onchangePage={onchangePage}
            />
            <Footer />
        </>
    );
};

export default memo(BlogScreen);
