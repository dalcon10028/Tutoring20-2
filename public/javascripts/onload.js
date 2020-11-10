axios.get('todolist')
  .then(res=>{
    res.data.forEach(el => {
      // li태그 생성
      const li = document.createElement('li');
      // 지우기 버튼 생성
      const btnDelete = document.createElement('button');
      // 텍스트 영역 생성
      const text = document.createElement('span');
      // 수정하기 input 생성
      const ipEdit = document.createElement('input');
      // 사용자 입력값 받아오기
      const userInput = el.todo;
      // li 태그에 bootstrap 디자인 적용하기
      li.className = 'list-group-item';
      // span 태그안에 텍스트 넣기
      text.appendChild(document.createTextNode(userInput));
      
      // 리스트 클릭했을 때 이벤트 달아주기
      li.addEventListener('click', ()=>{
        ipEdit.classList.remove('hide');
        text.classList.add('hide');
        ipEdit.value = text.innerText;
      })
      // 수정하기 bootstrap 디자인 적용하기
      ipEdit.style = 'width: 90%'
      ipEdit.type = 'text';
      ipEdit.classList.add('form-control', 'form-control-sm', 'hide');
      // 수정하기 엔터 눌렀을 때
      ipEdit.addEventListener('keypress', (e)=>{
        if(e.key === 'Enter'){
          text.innerText = ipEdit.value;
          ipEdit.classList.add('hide');
          text.classList.remove('hide');
        }
      })
      // 지우기 버튼 class 달아주기
      btnDelete.className = 'delete';
      // 지우기 버튼 글자 삽입
      btnDelete.appendChild(document.createTextNode("❌"));
      // 클릭하면 상위요소(li태그) 제거하기
      btnDelete.addEventListener('click',function() {
        this.parentElement.remove();
      });
      // li태그에 지우기 버튼 달기
      li.appendChild(text);
      li.appendChild(btnDelete);
      li.appendChild(ipEdit);
      // input 박스가 비어있을 경우
      if (userInput==='') alert("비어있습니다.");
      else document.getElementsByClassName('list-group')[0].appendChild(li);
    });  
  })
  .catch(err=>console.log(err));