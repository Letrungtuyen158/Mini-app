import React, { memo } from 'react';

const Footer = memo(function Footer() {
    return (
        <footer className=" w-full bg-black  bg-bggray py-4 text-white 2xl:px-0 ">
            <div className="relative max-w-screen-2xl block sm:flex justify-center items-center mx-auto">
                <p className=" text-sm text-center lg:text-lg font-normal mb-0">
                    @2023
                    <a
                        className="px-1 transition ease-in duration-150  hover:text-primary"
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Mini-App
                    </a>{' '}
                    All Right Reserved
                </p>
            </div>
        </footer>
    );
});

export { Footer };
