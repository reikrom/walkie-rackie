module.exports = {
  extends: [
    'eslint-config-kentcdodds',
    'eslint-config-kentcdodds/jest',
    'eslint-config-kentcdodds/jsx-a11y',
    'eslint-config-kentcdodds/react',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 'off',

    // for now use kent's setup, will update as needed / get feel for it
    // meh...
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/alt-text': 'off', // it's not smart enough...
    '@babel/new-cap': 'off',
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    // I can't figure these out:
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // enable these again someday:
    '@typescript-eslint/no-unsafe-argument': 'off',

    // this one isn't smart enough for our "~/" imports
    'import/order': 'off',

    // for CatchBoundaries
    '@typescript-eslint/no-throw-literal': 'off',
    'testing-library/no-await-sync-events': 'off',

    // this auto-fixes and it's nice to have types and actual stuff separate
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
}
