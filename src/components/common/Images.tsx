import React from 'react';
import { images } from 'assets/index';
import { classNames, isImageLink } from 'utils/Common.util';
interface IPropsImage {
    img: string;
    alt: string;
    className?: string;
}
export const Images = React.memo(function Images({
    img = '',
    alt = '',
    className = ''
}: IPropsImage) {
    return (
        <div
            className={`w-full h-[300px] cursor-pointer aspect-square rounded-2xl bg-slate-200 overflow-hidden ${className}`}>
            <img
                src={isImageLink(img) ? img : images.imgDefault}
                alt={alt}
                className="object-cover duration-300 hover:scale-110 hover:duration-500 object-center w-full h-full"
            />
        </div>
    );
});
