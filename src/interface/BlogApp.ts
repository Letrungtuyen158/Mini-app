export interface IFilterGetBlogList {
    limit?: number;
    page?: number;
    sortBy?: string;
    order?: ORDER;
    search?: string;
}

export enum ORDER {
    asc = 'asc',
    desc = 'desc'
}

export interface IBlog {
    content: string;
    createdAt: string;
    id: number;
    image: string;
    title: string;
}

export interface IBlogForm {
    content: string;
    image: string;
    title: string;
}
