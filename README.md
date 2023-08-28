🔸반복되는 컴포넌트 <br>
📁src/component/Working.jsx

<br>

<br>

🔸어떤것이 반복되는가
- 추가 한 to do list 를 반복해서 띄워준다.
- 컴포넌트 안에 if문으로 버튼을 다르게 보여준다 (완료 상태에 따라)

<br>


<br>

🔸코드
📁src/component/Working.jsx
```javascript
const Working = ({ item, clickDeleteButtonHandler, clickDoneButtonHandler, clickWorkingButtonHandler }) => {
  return (
    <div key={item.id} className="list-container">
      <div className="check-icon">🧡</div>
      <div className="list-item">
        <div className="list-title">{item.title}</div>
        <div className="list-content">{item.body}</div>
      </div>
      <div className="button-group">

        {/* isDone의 상태에 따라 버튼 다르게 나오기 */}
        {item.isDone
          ? <button
            onClick={() => clickWorkingButtonHandler(item.id)}
            className="list-button list-working-button"
            data-tooltip="🧡">
            취소
          </button>
          : <button
            onClick={() => clickDoneButtonHandler(item.id)}
            className="list-button list-done-button"
            data-tooltip="💙">
            완료
          </button>}

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
