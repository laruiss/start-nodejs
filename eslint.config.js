import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
}, {
  rules: {
    'curly': ['error', 'all'],
    'no-console': 'off',
    'no-case-declarations': 'off',
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'style/space-before-function-paren': ['error', 'always'],
    'ts/no-unused-vars': 'off',
    'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    'vue/no-irregular-whitespace': 'warn',
    'vue/max-attributes-per-line': ['error', {
      multiline: {
        max: 1,
      },
      singleline: {
        max: 1,
      },
    }],
  },
})
