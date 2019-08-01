module.exports = {
  'rules': {
    // 单引号
    'quotes': [ 'error', 'single' ],
    // function定义后跟空格
    'space-before-function-paren': [ 'error', 'always' ],
    // 尽量不带分号
    'semi': [ 'error', 'never' ],
    // 拖尾逗号
    'comma-dangle': [ 'error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'never',
      'functions': 'never',
    } ],
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': [ 'error', 'consistent' ],
    // 在括号内使用空格
    'array-bracket-spacing': [ 'error', 'always', { 'singleValue': false } ],
    // 强制数组元素间出现换行
    'array-element-newline': [ 'error', 'consistent' ],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': 'error',
    // 大括号风格要求
    'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ],
  },
}
