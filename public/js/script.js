$(()=>{
  // 소켓 연결
  const socket = io();
  // 채팅 내용들

  $('#userinput').on('keypress', (e)=>{
  // 인풋박스 엔터 누르고 공백 입력이 아닐 때
    if(e.key==='Enter' && $('#userinput').val()!==''){
      let msg = $('#userinput').val();
      let user_name = $('#dropdown_name').text();
      // 입력창 비우기
      $('#userinput').val('');
      // 채팅 입력
      $('#chat_box').append(`<li class="list-group-item">나 : ${msg}</li>`);
      // 서버에 전송
      console.log({'user_name': user_name, 'message': msg});
      socket.emit('send_message', {'user_name': user_name, 'message': msg});
    }
  })

  socket.on('send_message',(msg_data)=>{
    // 채팅 입력
    $('#chat_box').append(`<li class="list-group-item">${msg_data.user_name} : ${msg_data.message}</li>`);
  });
})