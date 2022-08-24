//ESM(ECMA Script Module) : import, export를 사용하는 기존 JS 개념 (브라우저 상에서 작동하는 개념)
//하지만 Node.js에서는 기본적으로 ESM 이 아닌 CommonJS 라는 방식을 지원한다. (Node.js 상에서 작동하는 개념)
//import 대신에 require() 사용
//export 대신에 module.exports 사용

//import autoprefixer from 'autoprefixer';
const autoprefixer = require("autoprefixer");

// export {
//   plugins: [
//     autoprefixer
//   ],
// };
module.exports = {
  plugins: [autoprefixer],
};
