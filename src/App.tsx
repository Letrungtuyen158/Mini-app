import { Suspense } from 'react';
import MainView from 'pages';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { BlogListSkeleton } from 'components/skeleton/ListBlog';

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<BlogListSkeleton />}>
                <BrowserRouter>
                    <MainView />
                </BrowserRouter>
            </Suspense>
        </Provider>
    );
}

export default App;
