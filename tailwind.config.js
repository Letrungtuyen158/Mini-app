module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryText: '#212529',
                azure: '#007BFF'
            }
        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
};
