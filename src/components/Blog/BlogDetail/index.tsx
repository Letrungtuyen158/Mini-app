import { ROUTERS } from 'constants/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from 'store';
import { BlogActions } from 'store/Blog';
import { BlogDetailSkeleton } from 'components/skeleton';
import { Images } from 'components/common/Images';
import { CreateOrEditBlog } from '../CreateOrEdit';

const BlogDetail = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const blog = useSelector((state: RootState) => state.blog.blog);
    const isLoading = useSelector((state: RootState) => state.blog.isLoadingDetailBlog);
    useEffect(() => {
        dispatch(BlogActions.getBlogsDetailRequest(Number(params?.id)));
    }, []);
    return (
        <div className="container mx-auto">
            <span className="mt-10 bg-black w-[20%] lg:w-[6%] rounded-md p-2 text-white flex items-center justify-center">
                <Link to={ROUTERS.HOME}>Back</Link>
            </span>
            <div className="flex flex-col lg:flex-row gap-10">
                {isLoading ? (
                    <BlogDetailSkeleton />
                ) : (
                    <>
                        <div className="border w-full lg:w-[50%] rounded-xl shadow-xl my-10 md:p-5 text-primaryText">
                            <Images img={blog?.image} alt={blog?.title} className="h-[600px]" />
                            <div className="p-4 md:p-0">
                                <h3 className="text-2xl font-bold my-5">{blog?.title}</h3>
                                <p className="mb-10 break-all">{blog?.content}</p>
                            </div>
                        </div>
                        <div className="flex-1 my-10 h-auto">
                            <CreateOrEditBlog />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export { BlogDetail };
