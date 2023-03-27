import { ROUTERS } from 'constants/router';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { IBlog } from 'interface/BlogApp';
import { Images } from 'components/common/Images';

interface IBlogItemProps {
    blog: IBlog;
}

const BlogItem = ({ blog }: IBlogItemProps) => {
    const { image, title, id, content } = blog || {};
    return (
        <Link to={ROUTERS.DETAIL_BLOG.replace(':id', String(id))}>
            <div className="flex flex-col p-2 cursor-pointer bg-white border shadow-lg drop-shadow-md rounded-2xl items-start gap-4 text-primaryText">
                <Images img={image} alt={title} />
                <div className="h-[120px] px-2 pb-2">
                    <h3 className="mb-1 text-xl font-medium line-clamp-2">{title}</h3>
                    <p className="text-base font-normal line-clamp-2 break-all">{content}</p>
                </div>
            </div>
        </Link>
    );
};

export default memo(BlogItem);
