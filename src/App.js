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

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const bodyChangeHandler = (event) => {
    setBody(event.target.value)
  }

  const clickAddButtonHandler = () => {
    const newList = {
      id: list.length + 1,
      title,
      body,
      isDone: false
    }
    //2. newList 투두리스트 추가 (제목, 내용 비어있으면 alert 띄우기)   
    if (title.length !== 0 && body.length !== 0) {
      setList([...list, newList])
      setTitle("")
      setBody("")
    } else {
      alert('빈 칸을 채워주세요')
    }
  }

  const clickDeleteButtonHandler = (id) => {
    setList(list.filter(list => list.id !== id))
  }

  const clickDoneButtonHandler = (id) => {
    setList(list.map(list => {
      if (list.id === id) {
        return { ...list, isDone: true };
      }
      return list
    }))
  }
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
    </div>
  );
}

export default App;
