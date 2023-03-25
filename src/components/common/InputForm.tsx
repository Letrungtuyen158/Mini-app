import { memo, useMemo } from 'react';
import { classNames } from 'utils/Common.util';
import { MessageError } from './ErrorMessage';
type IPropsInput = {
    label?: string;
    placeholder?: string;
    register: any;
    isRequired?: boolean;
    textarea?: boolean;
    classnamesProp?: string;
    onFocus?: () => void;
    onChange?: any;
    errorName?: any;
};
export const FormInput = memo(function FormInput(props: IPropsInput) {
    const {
        label = '',
        register,
        placeholder,
        textarea,
        isRequired,
        classnamesProp = '',
        onFocus,
        errorName = ''
    } = props;
    const renderTextArea = useMemo(
        () => (
            <textarea
                {...register}
                placeholder={placeholder}
                onFocus={onFocus}
                id={label}
                className={classNames(
                    'h-[200px] rounded-xl bg-transparent py-2  border-[1px] px-4 outline-none',
                    errorName ? 'border-red-400' : 'border-[#667085]'
                )}
            />
        ),
        [errorName]
    );
    const renderInput = useMemo(
        () => (
            <input
                {...register}
                placeholder={placeholder}
                id={label}
                type="text"
                className={`h-[51px] focus:outline-none  border-solid rounded-xl bg-transparent  border-[1px] px-4 ${
                    errorName ? 'border-red-400' : 'border-[#667085]'
                }`}
            />
        ),
        [errorName]
    );
    return (
        <div className={`w-full flex flex-col  mt-4 lg:mt-0 ${classnamesProp}`}>
            <label htmlFor={label} className="mb-2 text-black font-bold text-[18px]">
                {label} {isRequired && <span className="text-red-600">*</span>}
            </label>
            {textarea ? renderTextArea : renderInput}
            {errorName && <MessageError message={errorName?.message} />}
        </div>
    );
});
