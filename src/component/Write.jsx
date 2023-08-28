const Write = ({ title, body, titleChangeHandler, bodyChangeHandler, clickAddButtonHandler }) => {
  return (
    <div className="write-box">
      <div className="write-list">
        <input
          value={title}
          onChange={titleChangeHandler}
          type="text"
          placeholder="제목을 입력하세요"
          maxlength='30' />
        <input
          value={body}
          onChange={bodyChangeHandler}
          type="text"
          placeholder="내용을 입력하세요"
          maxlength='30' />
      </div>
      <button onClick={clickAddButtonHandler} className="write-button">+</button>
    </div>
  )
}

export default Write