// 소켓 연결
const socket = io();
// 채팅 내용들
let messages = [];

$('#userinput').on('keypress', (e)=>{
// 인풋박스 엔터 누르고 공백 입력이 아닐 때
  if(e.key==='Enter' && $('#userinput').val()!==''){
    let msg = $('#userinput').val();
    // 입력창 비우기
    $('#userinput').val('');
    // 채팅 입력
    $('#chat_box').append(`<li class="list-group-item">나 : ${msg}</li>`);
  }
})