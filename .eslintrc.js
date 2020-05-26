module.exports = {
    root: true,
    extends:[
        "airbnb",
        "airbnb/hooks",
        "airbnb/whitespace",
        '@react-native-community',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        "prettier",
    ],
};
