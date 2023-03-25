import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import CreateOrEditBlogForm from './CreateOrEdit.form';

const CreateOrEditBlog = () => {
    const params = useParams();
    const blog = useSelector((state: RootState) => state.blog.blog);
    return <CreateOrEditBlogForm blog={params?.id ? blog : {}} />;
};
export { CreateOrEditBlog };
