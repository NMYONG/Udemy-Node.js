const http = require("http");

// createServer가 생성한 서버를 새로운 상수(변수)로 저장해야 한다.
const server = http.createServer((req, res) => {
  //   process.exit(); 이벤트 루트를 잘라 프로그램을 종료한다.
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  // 응답 객체 사용하기
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end(); // 응답이 끝난 시점 이후로 아무것도 작성해서는 안 된다.
});

server.listen(3001); // node.js가 스크립트를 종료하지 않고 계속 실행되면서 듣도록 한다.
