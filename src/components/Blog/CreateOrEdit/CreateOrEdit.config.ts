import * as yup from 'yup';

export const schema = yup.object({
    title: yup.string().required('title is a required field').trim(),
    content: yup.string().required('content is a required field').trim(),
    image: yup.string().required('image is a required field').trim()
});
