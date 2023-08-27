🔸반복되는 컴포넌트
📁src/component/Done.jsx
📁src/component/Working.jsx

🔸어떤것이 반복되는가
- 추가 한 to do list 를 반복해서 띄워준다.

🔸왜 두개인가?
- isDone: true일 때 취소 버튼이,
- isDone: false일 때 완료 버튼으로 띄우기 위해 나누었다.

🔸코드
1. 📁src/component/Done.jsx
```javascript
const Done = ({ item, clickDeleteButtonHandler, clickWorkingButtonHandler }) => {
  return (
    <div key={item.id} className="list-container">
      <div className="check-icon">💙</div>
      <div className="list-item">
        <div className="list-title">{item.title}</div>
        <div className="list-content">{item.body}</div>
      </div>
      <div className="button-group">
        <button
          onClick={() => clickWorkingButtonHandler(item.id)}
          className="list-button list-working-button"
          data-tooltip="🧡">
          취소
        </button>
        <button
          onClick={() => clickDeleteButtonHandler(item.id)}
          className="list-button list-delete-button">
          ✖
        </button>
      </div>
    </div>
  )
}

export default Done
```
    
2. 📁src/component/Working.jsx
```javascript
const Working = ({ item, clickDeleteButtonHandler, clickDoneButtonHandler }) => {
  return (
    <div key={item.id} className="list-container">
      <div className="check-icon">🧡</div>
      <div className="list-item">
        <div className="list-title">{item.title}</div>
        <div className="list-content">{item.body}</div>
      </div>
      <div className="button-group">
        <button
          onClick={() => clickDoneButtonHandler(item.id)}
          className="list-button list-done-button"
          data-tooltip="💙">
          완료
        </button>
        <button
          onClick={() => clickDeleteButtonHandler(item.id)}
          className="list-button list-delete-button">
          ✖
        </button>
      </div>
    </div>
  )
}

export default Working
```
