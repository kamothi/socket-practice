// net module을 이용한 소켓 통신

//1. net 모듈을 추가
const net = require("net");

//2 createServer()를 이용해 TCP 서버를 생성한다.
const server = net.createServer((socket)=>{
    // 3. "data"라는 구분자로 클라이언트에서 오는 값을 받는다.
    socket.on("data",(data)=>{
        console.log("From client:",data.toString());
    });
    // 4. "close"는 net 모듈에 등록된 키워드로 클라이언트에서 소켓을 닫을 때 응답한다.
    socket.on("clost",()=>{
        console.log("client disconneted");
    });
    //5. write()를 이용해 서버에서 클라이언트로 메시지를 전달한다.
    socket.write("welcome to server");
});

server.on ("error",(err)=>{
    console.log("err" + err);
});

// 6. 5000번 포트를 열고 기다린다.
server.listen(5001,()=>{
    console.log("listening on 5000");
});