const path = require("path");

// 파일 명을 dirname에 입력해 경로를 알아낼 수 있다.
module.exports = path.dirname(process.mainModule.filename);
// dirname : 경로의 디렉토리 이름을 회신
// mainModule : 애플리케이션을 시작한 주요 모듈
