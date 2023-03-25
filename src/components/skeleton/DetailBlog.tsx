import React, { memo } from 'react';

const BlogDetailSkeleton = () => {
    return (
        <>
            <div className="border w-full lg:w-[50%] rounded-xl shadow-xl my-10 md:p-5 text-primaryText animate-pulse">
                <div className="w-full h-[600px] bg-slate-200"></div>
                <h3 className="rounded-2xl w-[10%] h-8 my-5 bg-slate-200 mx-5"></h3>
                <p className="h-20 bg-slate-200 rounded-2xl mx-5 mb-10"> </p>
            </div>
            <div className=" border flex-1 h-auto  rounded-xl my-10 md:p-5">
                <p className="h-5 w-[10%] bg-slate-200 rounded-2xl mx-5 mb-5"> </p>
                <p className="h-12 bg-slate-200 rounded-2xl mx-5 mb-5"> </p>
                <p className="h-5 w-[10%] bg-slate-200 rounded-2xl mx-5 mb-5"> </p>
                <p className="h-32 bg-slate-200 rounded-2xl mx-5 mb-5"> </p>
                <p className="h-5 w-[10%] bg-slate-200 rounded-2xl mx-5 mb-5"> </p>
                <p className="h-12 bg-slate-200 rounded-2xl mx-5 mb-5"> </p>
                <p className="h-10 w-[20%] bg-slate-200 rounded-2xl mx-5 mb-5"> </p>
            </div>
        </>
    );
};

export { BlogDetailSkeleton };
