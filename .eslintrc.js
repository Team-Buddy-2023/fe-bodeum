module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    project: ["tsconfig.json"],
    createDefaultProgram: true,
  },
  env: {
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  rules: {
    // props 확산 방지기능 제외
    "react/jsx-props-no-spreading": "off",
    // 'React' must be in scope when using JSX 에러 지우기(Next.js)
    "react/react-in-jsx-scope": "off",
    // ts파일에서 tsx구문 허용(Next.js)
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }], //should add ".ts" if typescript project
    //중첩된 삼항연산자 사용하기
    "no-nested-ternary": "off",
    //role-> aria-label 사용 안해도 됨
    "jsx-a11y/control-has-associated-label": "off",
    //index를 key값으로 사용
    "react/no-array-index-key": "off",
    //확장자명
    "import/extensions": ["off"],
  },
};
