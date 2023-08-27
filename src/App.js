import './App.css';
import React, { useState } from "react"
import Working from "./component/Working"
import Header from "./component/Header"
import Done from "./component/Done"

function App() {

  const [list, setList] = useState([
    { id: 0, title: "투두리스트만들기", body: "열심히 만들어 보자!", isDone: false },
    { id: 1, title: "투두리스트는", body: "영어로 To Do List", isDone: true }
  ])

  //제목, 내용 받아오기 위한 코드
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  //고유한 id를 만들기 위해 추가
  const [nextId, setNextId] = useState(2);

  //제목 저장
  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  //내용 저장
  const bodyChangeHandler = (event) => {
    setBody(event.target.value)
  }

  //+ 버튼을 눌러 글 추가(고유한 아이디 생성 부분)
  const clickAddButtonHandler = () => {
    const newList = {
      id: nextId,
      title,
      body,
      isDone: false
    }
    //newList 투두리스트 추가 (제목, 내용 비어있으면 alert 띄우기)   
    if (title.length !== 0 && body.length !== 0) {
      setList([...list, newList])
      setTitle("")
      setBody("")
      setNextId(nextId + 1);
    } else {
      alert('빈 칸을 채워주세요')
    }
  }

  //삭제
  const clickDeleteButtonHandler = (id) => {
    setList(list.filter(list => list.id !== id))
  }

  //Done으로 변경
  const clickDoneButtonHandler = (id) => {
    setList(list.map(list => {
      if (list.id === id) {
        return { ...list, isDone: true };
      }
      return list
    }))
  }

  //working으로 변경
  const clickWorkingButtonHandler = (id) => {
    setList(list.map(list => {
      if (list.id === id) {
        return { ...list, isDone: false };
      }
      return list
    }))
  }

  const aa = () => {
    console.log(list)
  }

  return (

    <div className='to-do-list'>
      <Header />

      <div className="write-box">
        <div className="write-list">
          <textarea
            value={title}
            onChange={titleChangeHandler}
            type="text"
            placeholder="제목을 입력하세요" />
          <textarea
            value={body}
            onChange={bodyChangeHandler}
            type="text"
            placeholder="내용을 입력하세요" />
        </div>
        <button onClick={clickAddButtonHandler} className="write-button">+</button>
      </div>


      <div className='list'>
        <span className='working-list'>▼  Working</span>


        {list
          .filter(item => !item.isDone)
          .map(item => {
            return (
              <Working
                key={item.id}
                item={item}
                clickDeleteButtonHandler={clickDeleteButtonHandler}
                clickDoneButtonHandler={clickDoneButtonHandler}
              />
            )
          })}


        <span className='done-list'>▼  Done</span>


        {list
          .filter(item => item.isDone)
          .map(item => {
            return (
              <Done
                key={item.id}
                item={item}
                clickDeleteButtonHandler={clickDeleteButtonHandler}
                clickWorkingButtonHandler={clickWorkingButtonHandler}
              />
            )
          })}
      </div>
      <button onClick={aa}>확인</button>
    </div>
  );
}

export default App;
