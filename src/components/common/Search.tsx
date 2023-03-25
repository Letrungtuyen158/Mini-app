import { images } from 'assets';
import { debounce } from 'lodash';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'utils/Common.util';

interface ISearchInputProps {
    onSearch?: (v?: string) => void;
}

const SearchInput = ({ onSearch }: ISearchInputProps) => {
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const searchRef: any = useRef();
    const onchange = useCallback(
        debounce((e: any) => {
            onSearch?.(e?.target?.value);
        }, 400),
        []
    );
    const handleToggleSearch = () => {
        setIsOpenSearch(!isOpenSearch);
    };
    useEffect(() => {
        if (isOpenSearch) searchRef.current.focus();
    }, [isOpenSearch]);
    return (
        <div
            className={classNames(
                'ease-out duration-300  h-10 rounded-md px-4 shadow-lg border bg-white flex',
                isOpenSearch ? 'w-[300px]' : 'w-[48px]'
            )}>
            <img
                src={images.search.default}
                alt={''}
                className="w-[15px] cursor-pointer"
                onClick={handleToggleSearch}
            />
            <input
                ref={searchRef}
                disabled={!isOpenSearch}
                onChange={onchange}
                className="outline-none w-full h-full px-4"
                placeholder={isOpenSearch ? 'search icon' : ''}
            />
        </div>
    );
};

export { SearchInput };
