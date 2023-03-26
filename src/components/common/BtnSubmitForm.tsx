import React from 'react';
import { classNames } from 'utils/Common.util';

const BtnSubmit = ({ id, onDelete, isSubmitting }: any) => {
    return (
        <div className="flex flex-col gap-4">
            <button
                type="submit"
                disabled={isSubmitting}
                className={classNames(
                    'bg-gradient-to-r from-[#6bdbe3] via-[#588BFE] to-[#A334FF] w-full lg:w-[20%] h-[51px] rounded-xl mt-[31px] text-[18px] font-black btn capitalize transition-all',
                    isSubmitting ? 'opacity-50' : 'opacity-100'
                )}>
                {id ? 'edit' : 'submit'}
            </button>
            {id && (
                <span
                    className="p-4 bg-red-400 border w-full lg:w-[20%]  rounded-xl cursor-pointer text-center font-black"
                    onClick={onDelete}>
                    Delete
                </span>
            )}
        </div>
    );
};

export { BtnSubmit };
