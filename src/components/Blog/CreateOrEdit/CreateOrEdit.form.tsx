import { yupResolver } from '@hookform/resolvers/yup';
import React, { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { schema } from './CreateOrEdit.config';
import { FormInput } from 'components/common';
import { createBlogApi, deleteBlogById, editBlogApi } from 'services';
import { IBlog, IBlogForm, IFilterGetBlogList, ORDER } from 'interface/BlogApp';
import { useNavigate, useParams } from 'react-router-dom';
import { showToastError, showToastSuccess } from 'utils/Toast.util';
import { BlogActions } from 'store/Blog';
import { useDispatch } from 'react-redux';
import { BtnSubmit } from 'components/common/BtnSubmitForm';
import { messAlerFail, messAlerSuccess } from 'constants/api';
import { ROUTERS } from 'constants/router';

interface ICreateOrEditBlogFormProps {
    blog?: IBlog;
}
export const defaultFilter = {
    limit: 12,
    page: 1,
    sortBy: 'createdAt',
    order: ORDER.desc,
    search: ''
};
const CreateOrEditBlogForm = ({ blog }: ICreateOrEditBlogFormProps) => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getBlogList = useCallback((filter: IFilterGetBlogList) => {
        dispatch(BlogActions.getBlogsRequest(filter));
    }, []);

    const formData = useForm<IBlogForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            title: blog?.title,
            content: blog?.content,
            image: blog?.image
        }
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = formData;
    const onSubmit = useCallback(
        async (data: IBlogForm) => {
            try {
                const res = params?.id
                    ? await editBlogApi(data, String(params?.id))
                    : await createBlogApi(data);
                if (res?.ok) {
                    if (params?.id) {
                        showToastSuccess(messAlerSuccess.edit);
                        dispatch(BlogActions.getBlogsDetailRequest(Number(params?.id)));
                    } else {
                        showToastSuccess(messAlerSuccess.create);
                        getBlogList(defaultFilter);
                        reset();
                    }
                } else {
                    showToastError(params?.id ? messAlerFail.edit : messAlerFail.create);
                }
            } catch (error) {
                showToastError();
            }
        },
        [params?.id]
    );
    const handleDeleteBlog = async () => {
        try {
            const res = await deleteBlogById(Number(params?.id));
            if (res.ok) {
                showToastSuccess(messAlerSuccess.delete);
                navigate(ROUTERS.HOME);
            } else {
                showToastError(messAlerFail.delete);
            }
        } catch (error) {
            showToastError();
        }
    };
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="container mx-auto p-5 border h-full rounded-xl shadow-md">
                <div className="flex flex-col gap-3">
                    <FormInput
                        register={register('title')}
                        placeholder="Enter title"
                        errorName={errors?.title}
                        label="Title"
                        isRequired
                    />
                    <FormInput
                        register={register('content')}
                        placeholder="Enter content"
                        textarea
                        errorName={errors?.content}
                        label="Content"
                        isRequired
                    />
                    <FormInput
                        register={register('image')}
                        placeholder="Enter image link"
                        errorName={errors?.image}
                        label="Image URL"
                        isRequired
                    />
                </div>
                <BtnSubmit id={params?.id} onDelete={handleDeleteBlog} />
            </form>
        </>
    );
};

export default memo(CreateOrEditBlogForm);
