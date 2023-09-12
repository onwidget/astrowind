/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        node: true,
        es2022: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:astro/recommended',
    ],
    plugins: [
        'astro',
        'react',
        'react-refresh',
        '@typescript-eslint',
        '@typescript-eslint/eslint-plugin',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'no-empty': 'warn',
        'no-empty-function': 'off',
        'no-empty-pattern': 'warn',
        'no-extra-parens': 'off', // use @typescript-eslint/no-extra-parens
        'no-extra-semi': 'off', // use @typescript-eslint/no-extra-semi
        'no-irregular-whitespace': [
            'warn',
            {
                skipStrings: false,
            },
        ],
        'no-trailing-spaces': 'warn',
        'space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        'max-len': [
            'warn',
            {
                code: 100,
                ignorePattern: '\\/(\\/|\\*)\\seslint-',
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
                ignoreUrls: true,
            },
        ],
        'no-plusplus': 'off',
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                functions: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
            },
        ],
        'import/order': 'off',
        'import/export': 'off',
        'import/namespace': 'off',
        'import/no-unresolved': 'error',
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
            },
        },
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
            rules: {
                'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
            },
        },
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
                ],
                '@typescript-eslint/no-non-null-assertion': 'off',
            },
        },
        {
            // Define the configuration for `<script>` tag.
            // Script in `<script>` is assigned a virtual file name with the `.js` extension.
            files: ['**/*.astro/*.js', '*.astro/*.js'],
            parser: '@typescript-eslint/parser',
        },
    ],
    settings: {
        version: 'detect',
        react: {
            fragment: 'Fragment',
            version: 'detect',
        },
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: ['./tsconfig.json'],
            },
            node: {},
        },
    },
};
