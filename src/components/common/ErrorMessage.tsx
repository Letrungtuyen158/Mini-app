import { memo } from 'react';

interface Props {
    message?: string;
}

const MessageError = memo(function MessageError({ message }: Props) {
    return <span className="text-left text-sm text-red-600 mt-[6px] ml-2">{message}</span>;
});

export { MessageError };
