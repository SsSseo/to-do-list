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