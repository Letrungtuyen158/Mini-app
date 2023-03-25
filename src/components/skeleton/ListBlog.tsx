import { range } from 'ramda';
import { memo } from 'react';

const BlogListSkeleton = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 container mx-auto animate-pulse mt-6">
            {range(0, 12).map((i) => {
                return (
                    <div
                        key={i}
                        className="flex flex-col p-2 items-start gap-4 bg-white border shadow-lg rounded-2xl">
                        <div className="w-full h-[300px] bg-slate-200 rounded-2xl"></div>
                        <div className="h-[120px] flex flex-col px-2 pb-2 w-full">
                            <h3 className="mb-2 text-xl font-medium animate-pulse cursor-pointer bg-slate-200 h-[30px] rounded-lg  w-[30%]"></h3>
                            <p className=" bg-slate-200 animate-pulse rounded-lg  flex-1 "> </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export { BlogListSkeleton };
