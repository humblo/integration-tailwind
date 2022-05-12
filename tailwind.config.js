module.exports = {
    purge: {
        content: ['./public/**/*.html']
    },
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            colors: {
                'bleu': '#2091F9',
                'noir-primaire': '#252B42',
                'noir-secondaire': '#374754',
                'gris-primaire':'#D8D8D8',
                'gris-secondaire':'#E8E8E8',
                'gris-tertiaire': '#F4F4F4',
                'rouge':'#ff0000',
            },
        },
    },
    plugins: [],
}
