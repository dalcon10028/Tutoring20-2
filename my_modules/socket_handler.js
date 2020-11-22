exports = module.exports = function(io){
  io.on('connection', (socket)=>{
    console.log('새로운 유저가 접속했습니다.');

    io.on('send_message', (msg_data)=>{
      console.log('전달받은 메세지 : '+ msg_data);
      app.io.broadcast.emit('send_message', msg_data);
    });
  });
}