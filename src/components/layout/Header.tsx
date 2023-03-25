import React, { memo } from 'react';
import { SortButton, SearchInput } from 'components/common';
import { ORDER } from 'interface/BlogApp';

interface IHeaderBlogProps {
    onSearch?: (v?: string) => void;
    onSort?: (v: ORDER) => void;
}

const HeaderBlog = memo(function HeaderBlog({ onSearch, onSort }: IHeaderBlogProps) {
    return (
        <div className="container  mx-auto flex justify-between items-center mt-[60px]">
            <h1 className="mb-4 font-bold text-2xl uppercase">collection:</h1>
            <div className="flex gap-2">
                <SearchInput onSearch={onSearch} />
                <SortButton onSort={onSort} />
            </div>
        </div>
    );
});

export { HeaderBlog };
