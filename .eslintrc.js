module.exports = {
    root: true,
    extends: [
        // "airbnb",
        // "airbnb/hooks",
        // "airbnb/whitespace",
        '@react-native-community',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        semi: [2, 'always'],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-use-before-define': ['error', {variables: true, functions: false, classes: true}],
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
};
