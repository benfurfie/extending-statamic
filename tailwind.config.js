/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],
    safelist: [
        'bg-orange-500',
        'text-orange-500',
        'bg-purple-500',
        'text-purple-500',
        'bg-blue-500',
        'text-blue-500',
        'bg-red-500',
        'text-red-500',
    ],
    theme: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
