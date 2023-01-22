const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onDelete,
}) => {
  return (
    <div className="DiaryItem">
      <span className="info">
        작성자 : {author} | 감정점수 : {emotion}
      </span>
      <br />
      <span className="date">{new Date(created_date).toLocaleString()}</span>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번째 일기 삭제?`)) onDelete(id);
        }}
      >
        삭제하기
      </button>
    </div>
  );
};
export default DiaryItem;
