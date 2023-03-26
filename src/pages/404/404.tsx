import React from 'react';
import { useNavigate } from 'react-router-dom';
const Notfound = () => {
    const navigate = useNavigate();

    const homePage = () => {
        navigate('/');
    };
    return (
        <section className="dark:bg-gray-900">
            <div className="py-44 px-8 mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-9xl tracking-tight font-extrabold text-white">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                        Something&apos;s missing.
                    </p>
                    <p className="mb-4 text-lg font-light text-black">
                        Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the
                        home page.
                    </p>
                    <button onClick={homePage} className="btn btn-primary">
                        Back to Homepage
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Notfound;
