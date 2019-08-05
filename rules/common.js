module.exports = {
  rules: {
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': ['error', 'consistent'],
    // 在括号内使用空格
    'array-bracket-spacing': ['error', 'never'],
    // 强制数组元素间出现换行
    'array-element-newline': ['error', 'consistent'],
    // 箭头函数体使用大括号
    'arrow-body-style': ['error', 'as-needed'],
    // 箭头函数的参数使用圆括号
    'arrow-parens': ['error', 'as-needed'],
    // 箭头之前或之后有空格
    'arrow-spacing': 'error',
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': 'error',
    // 大括号风格要求
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // 拖尾逗号
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'never',
      functions: 'never',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    // 强制在逗号周围使用空格
    'comma-spacing': ['error', { after: true, before: false  }],
    // 逗号风格
    'comma-style': ['error', 'last'],
    // 禁止在计算属性中使用空格
    'computed-property-spacing': ['error', 'never'],
    // 文件末尾保留一行空行
    'eol-last': ['error', 'always'],
    // 禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error', 'never'],
    // 函数括号内使用一致的换行
    'function-paren-newline': ['error', 'multiline'],
    // 强制 generator 函数中 * 号周围有空格
    'generator-star-spacing': ['error', 'after'],
    // 禁止在箭头函数体之前出现换行
    'implicit-arrow-linebreak': ['error', 'beside'],
    // 缩进
    indent: ['error', 2],
    // JSX属性双引号
    'jsx-quotes': ['error', 'prefer-double'],
    // 对象字面量的键和值空格风格
    'key-spacing': ['error', {
      afterColon: true,
      beforeColon: false,
      mode: 'strict',
    }],
    // 强制关键字周围空格的一致性
    'keyword-spacing': ['error', { after: true, before: true  }],
    // 强制注释周围有空行
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
    }],
    // 禁止使用连续的行注释来表示块注释。另外，要求块注释的每行之前有一个 *
    'multiline-comment-style': ['error', 'starred-block'],
    // 方法链中的每个调用之后或或深度成员访问之后有一个换行符
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': 'error',
    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': 'error',
    // 不允许多个空行
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    // 禁止可以表达为更简单结构的三元操作符
    'no-unneeded-ternary': 'error',
    // 不用var
    'no-var': 'error',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',
    // 强制在花括号内使用一致的换行符
    'object-curly-newline': ['error', {
      ExportDeclaration: 'always',
      ImportDeclaration: 'always',
      ObjectExpression: {
        consistent: true,
      },
      ObjectPattern: {
        consistent: true,
      },
    }],
    // 强制在花括号中使用一致的空格
    'object-curly-spacing': ['error', 'always'],
    // 对象字面量简写语法
    'object-shorthand': 'error',
    // 在变量声明周围换行
    'one-var-declaration-per-line': ['error', 'always'],
    // 优先使用数组和对象解构
    'prefer-destructuring': 'error',
    // 使用模板字面量而非字符串连接
    'prefer-template': 'error',
    // 对象字面量属性名称除必须不使用引号
    'quote-props': ['error', 'as-needed'],
    // 单引号
    quotes: ['error', 'single'],
    // 强制剩余和扩展运算符及其表达式之间没有空格
    'rest-spread-spacing': ['error', 'never'],
    // 尽量不带分号
    semi: ['error', 'never'],
    // import排序
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],
    // 变量排序
    'sort-vars': ['error', { ignoreCase: true }],
    // 语句块之前的空格
    'space-before-blocks': 'error',
    // function定义后跟空格
    'space-before-function-paren': ['error', 'always'],
    // 圆括号内的空格
    'space-in-parens': ['error', 'never'],
    // 要求中缀操作符周围有空格
    'space-infix-ops': ['error', { int32Hint: false }],
    // 一元操作符之前或之后存在空格
    'space-unary-ops': ['error', {  nonwords: false, words: true }],
    // 注释前有空白
    'spaced-comment': ['error', 'always'],
    // switch 的冒号左右有空格
    'switch-colon-spacing': ['error', { after: true, before: false }],
    // 模板字符串中禁止使用空格
    'template-curly-spacing': ['error', 'never'],
    // 禁止在模板标记和它们的字面量之间有空格
    'template-tag-spacing': ['error', 'never'],
    // 禁止Yoda条件
    yoda: ['error', 'never'],
  },
}
