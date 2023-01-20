const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  return (
    <div className="DiaryItem">
      <span className="info">
        작성자 : {author} | 감정점수 : {emotion}
      </span>
      <br />
      <span className="date">{new Date(created_date).toLocaleString()}</span>
      <div className="content">{content}</div>
    </div>
  );
};
export default DiaryItem;
