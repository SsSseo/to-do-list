const Working = ({ item, clickDeleteButtonHandler, clickDoneButtonHandler, clickWorkingButtonHandler }) => {
  return (
    <div key={item.id} className="list-container">
      <div className="check-icon">{item.isDone? "💙" : "🧡"}</div>
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