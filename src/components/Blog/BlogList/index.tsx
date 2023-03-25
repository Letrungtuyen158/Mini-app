import { isNilOrEmpty } from 'ramda-adjunct';
import { IBlog } from 'interface/BlogApp';
import BlogItem from './BlogItem';
import { BlogListSkeleton } from 'components/skeleton';
import { NoDataBlog } from 'components/common';
const BlogList = ({ blogList, stateBlogRedux }: { blogList: IBlog[]; stateBlogRedux: any }) => {
    if (stateBlogRedux?.blog?.isLoadingGetBlogList) return <BlogListSkeleton />;
    return (
        <div className="container mx-auto mt-6">
            {!isNilOrEmpty(blogList) ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-4">
                    {blogList?.map((blog: IBlog) => {
                        return <BlogItem key={blog?.id} blog={blog} />;
                    })}
                </div>
            ) : (
                <NoDataBlog />
            )}
        </div>
    );
};

export { BlogList };
