export const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ');
};

export const isImageLink = (link: string) => {
    return typeof link === 'string' && link.startsWith('https');
};
